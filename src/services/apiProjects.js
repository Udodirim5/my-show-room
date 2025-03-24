import supabase, { supabaseUrl } from "./supabase";

export const getProject = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error(error);
    throw new Error("Project couldn't be loaded");
  }
  return data;
};

export const createOrEditProject = async (newProject, id) => {
  const imageFile = newProject.image instanceof FileList ? newProject.image[0] : newProject.image;

  // Ensure file exists
  if (!imageFile) {
    throw new Error("No image file provided");
  }
  // Make sure bucket name is correct
  const BUCKET_NAME = "projects";
  
  // Check if URL is already set
  const hasImagePath = newProject.image?.startsWith?.(supabaseUrl);
  const imageName = `${Date.now()}-${imageFile.name}`.replace(/\//g, "");
  
  const imagePath = hasImagePath
    ? newProject.image
    : `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/${imageName}`;
  
  let query = supabase.from("projects");
  
  if (!id) {
    query = query.insert([{ ...newProject, image: imagePath }]);
  } else {
    query = query.update({ ...newProject, image: imagePath }).eq("id", id);
  }
  
  const { data, error } = await query.select().maybeSingle();
  
  if (error) {
    console.error(error);
    throw new Error("Project couldn't be created");
  }
  
  // ✅ Upload only if it's a new file
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
  }
  
  return data;
  };


export const deleteProjectApi = async (id) => {
  const { data, error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("project couldn't be deleted");
  }

  return data;
};
