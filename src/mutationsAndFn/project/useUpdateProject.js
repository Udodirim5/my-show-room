import toast from "react-hot-toast";
import { createOrEditProject } from "../../services/apiProjects";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/queryKeys";

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProject, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newData, id }) => createOrEditProject(newData, id),
    onSuccess: () => {
      toast.success("Project updated successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PROJECTS });
    },
    onError: (error) => toast.error(error.message),
  });

  return { updateProject, isUpdating };
};