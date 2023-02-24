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

const getDynamicComponent = (slug: string) => {
  let meta = {};
  const Component = dynamicImport(
    () =>
      import(`./${slug}.mdx`).then((e) => {
        console.log(e.meta);
        meta = e.meta;
        return e;
      }),
    {
      ssr: true,
    }
  );
  console.log(meta);
  return {
    Component,
    meta,
  };
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const { Component: DynamicComponent, meta: BlogMeta } =
    await getDynamicComponent(slug);
  console.log(23, BlogMeta);

  return (
    <>
      <p className={styles.title}>{slug}</p>
      <DynamicComponent />
    </>
  );
}
