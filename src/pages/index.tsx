import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

interface HomeProps {
  /** build time route list of blogs */
  blogPages: string[];
}

export default function Home({ blogPages }: HomeProps) {
  console.log(blogPages);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        lorum ipsum
        <div>
          <p>list of pages</p>
          <ul>
            {blogPages.map((b) => (
              <li key={b}>
                <Link href={b}>{b}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const glob = require("glob");
  const blogPages = glob.sync("*.mdx", { cwd: "./src/pages" });

  return {
    props: {
      blogPages: blogPages.map((b: string) => "/" + b.replace(/\.[^/.]+$/, "")),
    },
  };
}