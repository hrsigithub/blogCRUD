import styles from "@/styles/Home.module.css";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { BASE_URL } from "@/const";
import { useRouter } from "next/router";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    //  リロード防止
    e.preventDefault();

    console.log(title, content);

    try {
      await axios.post(BASE_URL + "/posts", {
        title,
        content,
      });

      alert("投稿したわ。");

      router.push("/")
    } catch (e) {
      alert("投稿に失敗したわ。");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ブログ新規登録</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>タイトル</label>
        <input
          className={styles.input}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <label className={styles.label}>本文</label>
        <textarea
          className={styles.textarea}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />
        <button className={styles.button}>投稿</button>
      </form>
    </div>
  );
};

export default CreatePost;
