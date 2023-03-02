import dynamicImport from "next/dynamic";
import getBlogPages from "@/app/getBlogPages";
export const dynamic = "error";
export const dynamicParams = false;

import styles from "@/styles/Blog.module.css";

export async function generateStaticParams() {
  const blogPages = await getBlogPages();
  return blogPages.map((e) => ({ slug: e.fileName }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

const getDynamicComponent = async (slug: string) => {
  const p: Promise<any> = new Promise((res, rej) => {
    dynamicImport(
      import(`./${slug}.mdx`)
        .then((e) => {
          return e;
        })
        .then((e) => {
          res({
            Component: e.default,
            meta: e.meta,
          });
          return e;
        }),
      {
        ssr: true,
      }
    );
  });

  return await p;
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const { Component: DynamicComponent, meta: blogMeta } =
    await getDynamicComponent(slug);

  return (
    <div className={styles.blogWrapper}>
      <article>
        <DynamicComponent />
      </article>
      <footer>
        <p>Created: {blogMeta?.created || "Timeless"}</p>
      </footer>
    </div>
  );
}
