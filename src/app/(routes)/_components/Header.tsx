import Link from "next/link";

const Header = () => {
  return <header className="flex justify-center p-4 bg-gray-200">
    <Link href="/" className="mr-auto">LOGO</Link>
    <h1 className="text-2xl font-bold">RIBO MINI HOMEPAGE</h1>
    </header>;
};

export default Header;