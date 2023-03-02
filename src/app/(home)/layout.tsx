import Link from "next/link";
import DarkLightModeDecider from "@/components/DarkLightModeDecider";

/** TODO: */
export default function Layout({ children, ...rest }: { children: any }) {
  // Yes, this is not exactly following or allowing for nextjs optimization; but it fits my use case
  return (
    <>
      <nav>
        <DarkLightModeDecider />
      </nav>
      {children}
    </>
  );
}
