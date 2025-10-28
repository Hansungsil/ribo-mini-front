import Link from "next/link";

const NavLayouts = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/layouts/default1">Default1</Link></li>
                <li><Link href="/layouts/default2">Default2</Link></li>
                <li><Link href="/layouts/default3">Default3</Link></li>
            </ul>
        </nav>
    );
};

export default NavLayouts;