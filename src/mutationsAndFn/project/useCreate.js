import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { createOrEditProject } from "../../services/apiProjects";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createOrEditProject,
    onSuccess: () => {
      toast.success("Project created successfully!");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PROJECTS });
    },
    onError: (error) => toast.error(error.message),
  });

  console.log(mutation); // Debugging output

  const { mutate: createProject, isLoading: isCreatingProject } = mutation;

  return { createProject, isCreatingProject };
};




// export const useCreateProject = () => {
//   const queryClient = useQueryClient();

//   const { mutate: createProject, isLoading: isCreatingProject } = useMutation({
//     mutationFn: createOrEditProject,
//     onSuccess: () => {
//       toast.success("Project created successfully!");
//       queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PROJECTS });
//     },
//     onError: (error) => toast.error(error.message),
//   });

//   return { createProject, isCreatingProject };
// };