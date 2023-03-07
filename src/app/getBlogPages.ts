import { glob } from "glob";
import fs, { statSync } from "fs";
// This function gets called at build time

const blogPath = "./src/app/blog/[slug]";
const getBlogPages = async (): Promise<
  Array<{
    fileName: string;
    path: string;
  }>
> => {
  const blogPages = await glob("*.mdx", {
    cwd: blogPath,
  });

  return blogPages
    .sort(
      (a, b) =>
        statSync(blogPath + "/" + a).mtimeMs -
        statSync(blogPath + "/" + b).mtimeMs
    )
    .reverse()
    .map((b: string) => {
      const fileName = b.replace(/\.[^/.]+$/, "");
      return {
        fileName,
        path: "/blog/" + fileName,
      };
    });
};

export default getBlogPages;
