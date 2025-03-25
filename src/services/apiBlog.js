import supabase, { supabaseUrl } from "./supabase";

const TableName = "blogPosts"

export const getPost = async () => {
  const { data, error } = await supabase.from(TableName).select("*");
  if (error) {
    console.error(error);
    throw new Error("Post couldn't be loaded");
  }
  return data;
};

export const createOrEditPost = async (newPost, id) => {
  const imageFile =
    newPost.coverImage instanceof FileList ? newPost.coverImage[0] : newPost.coverImage;

  // Ensure file exists
  if (!imageFile) {
    throw new Error("No image file provided");
  }

  // Make sure bucket name is correct
  const BUCKET_NAME = "blogposts";

  // Check if URL is already set
  const hasImagePath = newPost.coverImage?.startsWith?.(supabaseUrl);
  const imageName = `${Date.now()}-${imageFile.name}`.replace(/\//g, "");

  const imagePath = hasImagePath
    ? newPost.coverImage
    : `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/${imageName}`;

  let query = supabase.from(TableName);

  if (!id) {
    query = query.insert([{ ...newPost, coverImage: imagePath }]);
  } else {
    query = query.update({ ...newPost, coverImage: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Post couldn't be created");
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
      if (data?.id) await supabase.from("posts").delete().eq("id", data.id);
      throw new Error("Image couldn't be uploaded");
    }
  }

  return data;
};


export const deletePostApi = async (id) => {
  const { data, error } = await supabase
    .from(TableName)
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("post couldn't be deleted");
  }

  return data;
};
