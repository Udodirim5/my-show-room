import toast from "react-hot-toast";
import { deleteProjectApi } from "../../services/apiProjects";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteProject, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteProjectApi(id),
    onSuccess: () => {
      toast.success("Project deleted successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PROJECTS });
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteProject, isDeleting };
};
