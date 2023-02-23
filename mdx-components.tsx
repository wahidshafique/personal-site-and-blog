import { FC } from "react";
import type { MDXComponents } from "mdx/types"; // This file allows you to provide custom React components
import ResponsiveImage from "@/components/ResponsiveImage";
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // TODO: for some reason overriding img with the next img component causes a "Cannot read properties of null (reading 'useContext')" error
  // my current hunch is that this is because I am not loading the calling component through standard means..needs more investigation
  // img: ResponsiveImage,
  return { ...components };
}
