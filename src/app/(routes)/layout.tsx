import AppleStyleDock from "./_components/AppleStyleDock";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    {children}
    <AppleStyleDock />
  </>;
};

export default Layout;