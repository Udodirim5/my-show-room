import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { createOrEditPost } from "../../services/apiBlog";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  const { mutate: updatePost, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newData, id }) => createOrEditPost(newData, id),
    onSuccess: () => {
      toast.success("Post updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS });
    },
    onError: (error) => toast.error(error.message),
  });

  return { updatePost, isUpdating };
};