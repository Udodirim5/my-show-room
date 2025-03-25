import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { getPost } from "../../services/apiBlog";

export const usePosts = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: getPost,
  });
  return { isLoading, posts, error };
};