import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-2 px-2 md:px-8 w-full fixed z-50 top-0 bg-primary">
      <div className="flex h-full flex-row items-center justify-between m-auto">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden lg:flex">
          <Link href="/projects" className="text-sm text-heading">
            about
          </Link>
          <Link href="/projects" className="text-sm text-heading">
            experiences
          </Link>
          <Link href="/projects" className="text-sm text-heading">
            projects
          </Link>
          <Link href="/projects" className="text-sm text-heading">
            blogs
          </Link>
          <Link href="/projects" className="text-sm text-heading">
            contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

const Logo = () => (
  <div className="text-white flex items-center lg:block text-base lg:text-lg font-bold">
    <Image src="/assets/logo.png" width={40} height={40} alt="logo" className="w-10 pr-2 md:pr-0 lg:w-16" />
    <div className="text-xs font-normal text-white text-opacity-30">
      ADEFEMI OSENI
    </div>
  </div>
);

export default Header;
