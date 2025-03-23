import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePosts from "@/hooks/usePosts";
import Post from "@/types/Post";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TableViewPage = () => {
  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 10;

  const { data: posts } = usePosts({ page: page, pageSize: POSTS_PER_PAGE });

  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User Id</TableHead>
            <TableHead>Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts?.map((post: Post) => (
            <TableRow>
              <TableCell className="font-medium">{post.userId}</TableCell>
              <TableCell>{post.id}</TableCell>
              <TableCell>{`${post.title.slice(0, 50)}...`}</TableCell>
              <TableCell className="text-right">
                {`${post.body.slice(0, 50)}...`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>A list of all posts.</TableCaption>
      </Table>
      <div className="flex flex-row justify-between">
        <Button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default TableViewPage;
