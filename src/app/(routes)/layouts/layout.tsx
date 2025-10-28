import NavLayouts from "@/components/nav/NavLayouts";

const LayoutsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <NavLayouts />
    {children}
  </>;
};

export default LayoutsLayout;