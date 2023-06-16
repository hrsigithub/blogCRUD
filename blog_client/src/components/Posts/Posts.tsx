// import Link from "next/link";
import { PostType } from "@/types";
import Post from "./Post"
// import styles from "./Posts.module.css";

type Props = {
  postsData: PostType[];
};

const Posts = ({ postsData }: Props) => {
  return (
    <div>
      {postsData.map((post: PostType) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
