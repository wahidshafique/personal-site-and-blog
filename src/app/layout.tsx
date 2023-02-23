import "@/styles/globals.css";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: any }) {
  // Yes, this is not exactly following or allowing for nextjs optimization; but it fits my use case
  return (
    <>
      <html lang="en" className={openSans.className}>
        <body>root {children}</body>
      </html>
    </>
  );
}
