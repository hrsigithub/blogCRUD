import Link from "next/link";
import { PostType } from "@/types";
import styles from "./Posts.module.css";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <div>
      <Link href={`posts/${post.id}`} className={styles.postCardBox}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.content}</p>
      <Link href={`/edit-post/${post.id}`}>
        <button className={styles.editButton}>編集</button>
      </Link>
      <button className={styles.deleteButton}>削除</button>
    </div>
  );
};

export default Post;
