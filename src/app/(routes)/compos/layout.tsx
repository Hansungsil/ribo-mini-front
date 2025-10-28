import NavCompos from "@/components/nav/NavCompos";

const ComposLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <NavCompos />
    {children}
  </>;
};

export default ComposLayout;