'use client';

import Link from "next/link";

const Header = () => {
  return <header className="sticky top-0 z-50 flex justify-center p-4 bg-gray-800">
    <Link href="/">
      <h1 className="text-2xl font-bold text-white">RIBO MINI HOMEPAGE</h1>
    </Link>
    </header>;
};

export default Header;