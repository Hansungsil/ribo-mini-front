import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Header />
    <Nav />
    {children}
    <Footer />
  </>;
};

export default Layout;