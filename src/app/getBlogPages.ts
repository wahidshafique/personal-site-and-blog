// This function gets called at build time
export default function getBlogPages(): Array<{
  fileName: string;
  path: string;
}> {
  const glob = require("glob");
  const blogPages = glob.sync("*.mdx", { cwd: "./src/app/blog/[slug]" });

  return blogPages.map((b: string) => {
    const fileName = b.replace(/\.[^/.]+$/, "");
    return {
      fileName,
      path: "/blog/" + fileName,
    };
  });
}
