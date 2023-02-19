type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
