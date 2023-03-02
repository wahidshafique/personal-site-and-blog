import Link from "next/link";
import DarkLightModeDecider from "@/components/DarkLightModeDecider";

export default function Layout({ children, ...rest }: { children: any }) {
  return (
    <>
      <nav>
        <Link href="/">Back ↩</Link>
        <DarkLightModeDecider />
      </nav>
      {children}
    </>
  );
}
