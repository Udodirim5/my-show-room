import supabase, { supabaseUrl } from "./supabase";

export const getProject = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error(error);
    throw new Error("Project couldn't be loaded");
  }
  return data;
};
const BUCKET_NAME = "projects";

export const createOrEditProject = async (newProject, id) => {
  const imageFile = newProject.image instanceof FileList ? newProject.image[0] : newProject.image;

  if (!imageFile) {
    throw new Error("No image file provided");
  }

  const hasImagePath = newProject.image?.startsWith?.(supabaseUrl);
  const imageName = `${Date.now()}-${imageFile.name}`.replace(/\//g, "");
  const imagePath = hasImagePath
    ? newProject.image
    : `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/${imageName}`;

  let query = supabase.from("projects");
  let oldImage = null;

  if (id) {
    // Fetch existing image if updating
    const { data: existingProject, error: fetchError } = await supabase
      .from("projects")
      .select("image")
      .eq("id", id)
      .single();

    if (fetchError) {
      console.error(fetchError);
      throw new Error("Failed to fetch existing project data");
    }

    oldImage = existingProject?.image; // Store old image for later deletion

    query = query.update({ ...newProject, image: imagePath }).eq("id", id);
  } else {
    query = query.insert([{ ...newProject, image: imagePath }]);
  }

  const { data, error } = await query.select().maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Project couldn't be created/updated");
  }

  // ✅ Upload new image only if it's a new file
  if (!hasImagePath) {
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(imageName, imageFile, {
        cacheControl: "3600",
        upsert: false,
        contentType: imageFile.type,
      });

    if (uploadError) {
      console.error(uploadError);
      if (data?.id) await supabase.from("projects").delete().eq("id", data.id);
      throw new Error("Image couldn't be uploaded");
    }

    // ✅ Delete old image only if it's different from the new one
    if (id && oldImage && oldImage !== imagePath) {
      const oldImagePath = oldImage.replace(`${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/`, "");
      if (oldImagePath) {
        await supabase.storage.from(BUCKET_NAME).remove([oldImagePath]);
      }
    }
  }

  return data;
};

  export const deleteProjectApi = async (id) => {
    // Fetch project to get image URL
    const { data: project, error: fetchError } = await supabase
      .from("projects")
      .select("image")
      .eq("id", id)
      .single();
  
    if (fetchError) {
      console.error(fetchError);
      throw new Error("Failed to fetch project data");
    }
  
    // Delete project record
    const { data, error } = await supabase.from("projects").delete().eq("id", id).select();
  
    if (error) {
      console.error(error);
      throw new Error("Project couldn't be deleted");
    }
  
    // ✅ Delete the image from storage
    if (project?.image) {
      const imagePath = project.image.split(`${BUCKET_NAME}/`)[1]; // Extract filename
      if (imagePath) {
        await supabase.storage.from(BUCKET_NAME).remove([imagePath]);
      }
    }
  
    return data;
  };
  