import styles from "@/styles/Home.module.css";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { BASE_URL } from "@/const";
import { useRouter } from "next/router";
import { PostType } from "@/types";

type Props = {
  post: PostType;
  test?: string;
};

export async function getServerSideProps(context: any) {
  const id = context.params.id;

  const res = await fetch(BASE_URL + `/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

const EditPost = ({ post }: Props) => {

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    //  リロード防止
    e.preventDefault();

    console.log(title, content);

    try {
      await axios.put(BASE_URL + "/posts/" + post.id, {
        title,
        content,
      });

      alert("投稿編集したわ。");

      router.push("/");
    } catch (e) {
      alert("投稿編集に失敗したわ。");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ブログ編集</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>タイトル</label>
        <input
          className={styles.input}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          value={title}
        />
        <label className={styles.label}>本文</label>
        <textarea
          className={styles.textarea}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          value={content}
        />
        <button className={styles.button}>投稿</button>
      </form>
    </div>
  );
};

export default EditPost;
