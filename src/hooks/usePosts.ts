import fetchPosts from "@/services/api";
import Post from "@/types/Post";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export interface PostQuery {
    page: number;
    pageSize: number;
}

const usePosts = ({page, pageSize}:PostQuery) => {
    return useQuery<Post[], Error>({
        queryKey: ["posts", page],
        queryFn: () => fetchPosts(page, pageSize),
        placeholderData: keepPreviousData,
    })
}

export default usePosts;