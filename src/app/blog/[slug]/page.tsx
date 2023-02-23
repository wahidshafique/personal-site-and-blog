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
  const component = dynamicImport(() => import(`./${slug}.mdx`), {
    ssr: true,
  });
  return component;
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const DynamicComponent = await getDynamicComponent(slug);

  return (
    <>
      <p className={styles.title}>{slug}</p>
      <DynamicComponent />
    </>
  );
}
