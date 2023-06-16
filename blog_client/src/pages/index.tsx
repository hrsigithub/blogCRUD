// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import Headline from '@/components/Headline';
import styles from '@/styles/Home.module.css'
import { Post } from "@/types";

import Link from "next/link";
type Props = {
  posts: Post[];
};

// Next.js はビルド時に getStaticProps から返される props を使ってプリレンダリングします。
// getStaticProps はHome()の外でexportを利用して使用する。
export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3001/api/v1/posts");
  const posts = await res.json();

  console.log(posts);

  return {
    // HomeへPropsで渡す
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default function Home({ posts }: Props) {
  return (
    <>
      <div className={styles.homeContainer}>
        <Headline></Headline>
        <div>
          {posts.map((post: Post) => (
            <div key={post.id} className={styles.postCard}>
              <Link href={`posts/${post.id}`} className={styles.postCardBox}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.content}</p>
              <button className={styles.editButton}>Edit</button>
              <button className={styles.deleteButton}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
