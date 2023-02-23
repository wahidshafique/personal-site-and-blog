export default function BlogLayout({ children }: { children: any }) {
  // Yes, this is not exactly following or allowing for nextjs optimization; but it fits my use case
  // TODO:
  return (
    <>
      <div>{children}</div>
    </>
  );
}
