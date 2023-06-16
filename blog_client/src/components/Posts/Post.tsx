import Link from "next/link";
import { PostType } from "@/types";
import styles from "./Posts.module.css";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <div>
      <div key={post.id} className={styles.postCard}>
        <Link href={`posts/${post.id}`} className={styles.postCardBox}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.content}</p>
        <button className={styles.editButton}>Edit</button>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
};

export default Post;
