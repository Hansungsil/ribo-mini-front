import Link from "next/link";

const NavCompos  = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/compos/default1">Default1</Link></li>
                <li><Link href="/compos/default2">Default2</Link></li>
                <li><Link href="/compos/default3">Default3</Link></li>
            </ul>
        </nav>
    );
};

export default NavCompos;