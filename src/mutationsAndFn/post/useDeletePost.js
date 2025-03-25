import toast from "react-hot-toast";
import { deletePostApi } from "../../services/apiBlog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const { mutate: deletePost, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deletePostApi(id),
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS });
    },
    onError: (error) => toast.error(error.message),
  });

  return { deletePost, isDeleting };
};
