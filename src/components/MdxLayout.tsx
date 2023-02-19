import { MDXProvider } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";

type Props = {
  children?: React.ReactNode;
};

const ResponsiveImage = (props: ImageProps) => (
  <Image
    fill
    {...props}
    src={props.src || ""}
    alt={props.alt || "missing image"}
  />
);

const components: any = {
  img: ResponsiveImage,
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  );
};

export default Layout;
