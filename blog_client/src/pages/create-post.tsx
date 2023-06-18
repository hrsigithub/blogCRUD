import styles from "@/styles/Home.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    //  リロード防止
    e.preventDefault();

    console.log(title, content);
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
