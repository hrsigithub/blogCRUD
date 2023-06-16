
import Link from "next/link";
import styles from '@/components/Headline.module.css'


const Headline = () => {
  return (
    <div>
      <h2>Rails & Next.js Blog</h2>
      <Link href="/create-post" className={styles.createButton}>
        Create new Post
      </Link>
    </div>
  );
};

export default Headline;
