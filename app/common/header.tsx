import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-16 md:h-32 px-4 md:px-8 w-ful">
      <div className="flex h-full flex-row items-center justify-between m-auto">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="">
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
  <div className="text-white text-base lg:text-lg font-bold">
    <Image src="/assets/logo.png" width={40} height={40} alt="logo" className="w-16" />
    <div className="text-xs font-normal text-white text-opacity-30">
      ADEFEMI OSENI
    </div>
  </div>
);

export default Header;
