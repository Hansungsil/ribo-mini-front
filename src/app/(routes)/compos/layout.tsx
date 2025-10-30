import Navbar from "@/components/common/Navbar";
import { composNavItems } from "@/data/navItem";

const ComposLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Navbar navItems={composNavItems} />
    {children}
  </>;
};

export default ComposLayout;