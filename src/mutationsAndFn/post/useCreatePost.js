import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { createOrEditPost } from "../../services/apiBlog";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const { mutate: createPost, isLoading: isCreatingPost } = useMutation({
    mutationFn: createOrEditPost,
    onSuccess: () => {
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS });
    },
    onError: (error) => toast.error(error.message),
  });

  return { createPost, isCreatingPost };
};