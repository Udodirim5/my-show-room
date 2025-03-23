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
  const hasImagePath = newProject.image?.startsWith?.(supabaseUrl);

  const imageName = `${Date.now()}-${newProject.image.name}`.replace(/\//g, "");

  const imagePath = hasImagePath
    ? newProject.image
    : `${supabaseUrl}/storage/v1/object/public/project-images/${imageName}`;

  // Create/Edit
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

  // ✅ Upload only if the image is new (not an existing URL)
  if (hasImagePath) {
    return data;
  } else {
    const { error: storageError } = await supabase.storage
      .from("project-images")
      .upload(imageName, newProject.image, {
        cacheControl: "3600",
        upsert: false, // Prevent replacing existing images
        contentType: newProject.image.type, // Ensures correct MIME type
      });

    // ✅ Prevent deleting undefined IDs
    if (storageError) {
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
