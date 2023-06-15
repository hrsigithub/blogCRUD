import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Next.js はビルド時に getStaticProps から返される props を使ってプリレンダリングします。
export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3001/api/v1/posts")  

}

export default function Home() {
  return (
    <>
    </>
  )
}
