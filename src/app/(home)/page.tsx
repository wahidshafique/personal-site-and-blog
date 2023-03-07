import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import getBlogPages from "@/app/getBlogPages";

export default async function Home() {
  const blogPages = await getBlogPages();
  return (
    <>
      <main className={styles.main}>
        <h1>Wahid Shafique</h1>
        Hi, I am a web dev working in Toronto.{" "}
        <a href="mailto:wahidshafique42@gmail.com">Reach out to me</a> if you
        need anything!
        <div>
          <p>List of pages: </p>
          <ul>
            {blogPages?.map((b) => {
              console.log(b);
              return (
                <li key={b.path}>
                  <Link href={b.path}>{b.fileName}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
