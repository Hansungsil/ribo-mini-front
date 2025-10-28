import Link from "next/link";

const NavPosts = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/posts/default1">Default1</Link></li>
                <li><Link href="/posts/default2">Default2</Link></li>
                <li><Link href="/posts/default3">Default3</Link></li>
            </ul>
        </nav>
    );
};

export default NavPosts;