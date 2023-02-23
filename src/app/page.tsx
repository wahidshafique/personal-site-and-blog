import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import getBlogPages from "./getBlogPages";

export default function Home() {
  const blogPages = getBlogPages();
  console.log(blogPages);
  return (
    <>
      <main className={styles.main}>
        <h1>Wahid Shafique</h1>
        Hi, I am a web dev working in Toronto. I like movies and stuff. Reach
        out to me if you need anything!
        <div>
          <p>List of pages</p>
          <ul>
            {blogPages.map((b) => (
              <li key={b.path}>
                <Link href={b.path}>{b.fileName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
