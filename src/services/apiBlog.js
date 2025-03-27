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
const BUCKET_NAME = "blogposts";
const TABLE_NAME = "blogPosts"; // Make sure this matches your Supabase table name

export const createOrEditPost = async (newPost, id) => {
  const imageFile =
    newPost.coverImage instanceof FileList ? newPost.coverImage[0] : newPost.coverImage;

  if (!imageFile) {
    throw new Error("No image file provided");
  }

  const hasImagePath = newPost.coverImage?.startsWith?.(supabaseUrl);
  const imageName = `${Date.now()}-${imageFile.name}`.replace(/\//g, "");
  const imagePath = hasImagePath
    ? newPost.coverImage
    : `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/${imageName}`;

  let query = supabase.from(TABLE_NAME);
  let oldImage = null;

  if (id) {
    // Fetch existing image if updating
    const { data: existingPost, error: fetchError } = await supabase
      .from(TABLE_NAME)
      .select("coverImage")
      .eq("id", id)
      .single();

    if (fetchError) {
      console.error(fetchError);
      throw new Error("Failed to fetch existing post data");
    }

    oldImage = existingPost?.coverImage; // Store old image for later deletion

    query = query.update({ ...newPost, coverImage: imagePath }).eq("id", id);
  } else {
    query = query.insert([{ ...newPost, coverImage: imagePath }]);
  }

  const { data, error } = await query.select().maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Post couldn't be created/updated");
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
      if (data?.id) await supabase.from(TABLE_NAME).delete().eq("id", data.id);
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

export const deletePostApi = async (id) => {
  // Fetch the existing post to get the image URL
  const { data: post, error: fetchError } = await supabase
    .from(TABLE_NAME)
    .select("coverImage")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error(fetchError);
    throw new Error("Failed to fetch post before deletion");
  }

  // Delete the post from Supabase
  const { error: deleteError } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("id", id);

  if (deleteError) {
    console.error(deleteError);
    throw new Error("Post couldn't be deleted");
  }

  // ✅ Delete associated image
  if (post?.coverImage) {
    const oldImagePath = post.coverImage.replace(`${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/`, "");
    if (oldImagePath) {
      await supabase.storage.from(BUCKET_NAME).remove([oldImagePath]);
    }
  }

  return { success: true };
};
