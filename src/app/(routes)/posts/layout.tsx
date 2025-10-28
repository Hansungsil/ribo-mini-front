import NavPosts from "@/components/nav/NavPosts";

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <NavPosts />
    {children}
  </>;
};

export default PostsLayout;