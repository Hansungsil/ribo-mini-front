import Navbar from "@/components/common/Navbar";
import { postsNavItems } from "@/data/navItem";

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Navbar navItems={postsNavItems} />
    {children}
  </>;
};

export default PostsLayout;