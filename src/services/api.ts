import axios from "axios";
import Post from "@/types/Post";

const fetchPosts = (page: number, pageSize: number) => {
    return axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _start: (page - 1) * pageSize,
                _limit: pageSize
            }
        })
        .then((res) => res.data);
} 

export default fetchPosts;