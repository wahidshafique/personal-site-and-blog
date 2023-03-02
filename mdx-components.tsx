import { FC } from "react";
import type { MDXComponents } from "mdx/types"; // This file allows you to provide custom React components
import ResponsiveImage from "@/components/ResponsiveImage";
import SyntaxHighlighter from "react-syntax-highlighter";
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

const CustomCodeBlock = ({ children }: any) => {
  const [noop, lang] = children.props.className.split("language-");
  return (
    <div className="code-wrapper">
      <strong className="lang-tag">{lang}</strong>
      <SyntaxHighlighter wrapLongLines language={lang}>
        {children.props.children}
      </SyntaxHighlighter>
    </div>
  );
};

const CustomImg = ({ children, ...rest }: any) => {
  // I am stripping the public here because I need that to make this work inside obsidian (TODO: very niche issue)
  const stripSrc = rest.src.split("public")[1];
  return <img {...rest} src={stripSrc} />;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // TODO: for some reason overriding img with the next img component causes a "Cannot read properties of null (reading 'useContext')" error
  // my current hunch is that this is because I am not loading the calling component through standard means..needs more investigation
  // img: ResponsiveImage,
  return { img: CustomImg, pre: CustomCodeBlock, ...components };
}
