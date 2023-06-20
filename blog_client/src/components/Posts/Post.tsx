import Link from "next/link";
import { PostType } from "@/types";
import styles from "./Posts.module.css";
import axios from "axios";
import { BASE_URL } from "@/const";
import { useRouter } from "next/router";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const router = useRouter();

  const handleDelete = async (postID: string) => {
    try {
      await axios.delete(BASE_URL + "/posts/" + postID);

      router.reload();
    } catch (e) {
      alert("削除失敗したわ");
    }
  };

  return (
    <div>
      <Link href={`posts/${post.id}`} className={styles.postCardBox}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.content}</p>
      <Link href={`/edit-post/${post.id}`}>
        <button className={styles.editButton}>編集</button>
      </Link>
      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(post.id)}
      >
        削除
      </button>
    </div>
  );
};

export default Post;
