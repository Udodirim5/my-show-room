import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { getProject } from "../../services/apiProjects";

export const useProjects = () => {
  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({
    queryKey: QUERY_KEYS.PROJECTS,
    queryFn: getProject,
  });
  return { isLoading, projects, error };
};