// import Link from "next/link";
import { PostType } from "@/types";
import Post from "./Post";
import styles from "./Posts.module.css";

type Props = {
  postsData: PostType[];
};

const Posts = ({ postsData }: Props) => {
  return (
    <div>
      {postsData.map((post: PostType) => (
        <div key={post.id} className={styles.postCard}>
          <Post post={post}></Post>
        </div>
      ))}
    </div>
  );
};

export default Posts;
