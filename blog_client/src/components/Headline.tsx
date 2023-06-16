import Link from "next/link";
import styles from "@/components/Headline.module.css";
import { Head } from "next/document";

const Headline = () => {
  return (
    <div>
      {/* <Head>
        <title>タイトルじゃけ</title>
      </Head> */}

      <h2>Rails & Next.js Blog</h2>
      <Link href="/create-post" className={styles.createButton}>
        Create new Post
      </Link>
    </div>
  );
};

export default Headline;
