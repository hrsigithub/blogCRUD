import { PostType } from "@/types";
import { useRouter } from "next/router";
import styles from "@/styles/Post.module.css";

type Props = {
  post: PostType;
};

// pages/posts/[id].tsx
export async function getStaticPaths() {
  const res = await fetch("http://127.0.0.1:3001/api/v1/posts");
  const posts: PostType[] = await res.json();

  console.log(posts);

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  console.log("paths" + paths);

  return {
    paths,
    fallback: true,
  };
}


// ISR
export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`http://127.0.0.1:3001/api/v1/posts/${params.id}`);
  const post = await res.json();

  console.log(post);

  return {
    // HomeへPropsで渡す
    props: {
      post,
    },
    revalidate: 60, // 1 min
  };
}


const Post = ({ post }: Props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>待ってね。</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.date}>{post.created_at}</div>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
};

export default Post;
