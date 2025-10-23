import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import AppleStyleDock from "./_components/AppleStyleDock";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Header />
    <Nav />
    {children}
    <AppleStyleDock />
    <Footer />
  </>;
};

export default Layout;