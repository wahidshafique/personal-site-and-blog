import { FC, ImgHTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types"; // This file allows you to provide custom React components
import Image from "next/image";
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
const H1: FC = ({ children }: React.PropsWithChildren<{}>) => {
  // ...
  return <p>{children}</p>;
};

const ResponsiveImage: FC<ImgHTMLAttributes<{}>> = (props) => {
  return (
    <Image
      fill
      {...props}
      width={Number(props.width) ?? 0}
      height={Number(props.width) ?? 0}
      placeholder="blur"
      src={props.src || ""}
      alt={props.alt || ""}
    />
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
