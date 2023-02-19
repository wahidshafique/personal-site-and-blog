import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HomeLayout from "../components/HomeLayout";
import MdxLayout from "../components/MdxLayout";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {
  // Yes, this is not exactly following or allowing for nextjs optimization; but it fits my use case
  const Layout = Component.name === "MDXContent" ? MdxLayout : HomeLayout;
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
