// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import Headline from "@/components/Headline";
import Posts from "@/components/Posts/Posts";
import styles from "@/styles/Home.module.css";
import { PostType } from "@/types";

// import Link from "next/link";

type Props = {
  posts: PostType[];
};

// Next.js はビルド時に getStaticProps から返される props を使ってプリレンダリングします。
// getStaticProps はHome()の外でexportを利用して使用する。
// ISR
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
        <Headline />
        <Posts postsData={posts} />
      </div>
    </>
  );
}
