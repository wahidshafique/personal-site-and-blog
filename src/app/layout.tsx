import "@/styles/globals.css";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

/** TODO: */
export default function RootLayout({ children, ...rest }: { children: any }) {
  // Yes, this is not exactly following or allowing for nextjs optimization; but it fits my use case
  return (
    <>
      <html lang="en" className={openSans.className}>
        <body>{children}</body>
      </html>
    </>
  );
}

export const metadata: Metadata = {
  title: "Wahid Shafique",
  description:
    "My digital garden (blog) and maybe just a place to dump random ideas",
};
