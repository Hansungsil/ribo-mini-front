import Navbar from "@/components/common/Navbar";
import { layoutsNavItems } from "@/data/navItem";

const LayoutsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Navbar navItems={layoutsNavItems} />
    {children}
  </>;
};

export default LayoutsLayout;