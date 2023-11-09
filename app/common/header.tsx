import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Header = ({
  handleHashChange,
  activeHash,
}: {
  activeHash: string;
  handleHashChange: (hash: string) => void;
}) => {

  const getActive = (hash: string) => {
    return hash === activeHash ? "text-slate-100 text-xl" : "";
  };

  return (
    <div className="py-2 px-2 md:px-8 w-full fixed z-50 top-0 bg-primary">
      <div className="flex h-full flex-row items-center justify-between m-auto">
        <Link href="#home" onClick={() => handleHashChange("home")}>
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-end">
          <Linker
            keyV="experience"
            title="experience"
            handleHashChange={handleHashChange}
            active={getActive("experience")}
          />
          <Linker
            keyV="about"
            title="about"
            handleHashChange={handleHashChange}
            active={getActive("about")}
          />
          <Linker
            keyV="project"
            title="projects"
            handleHashChange={handleHashChange}
            active={getActive("project")}
          />
          <Linker
            keyV="contact"
            title="contact"
            handleHashChange={handleHashChange}
            active={getActive("contact")}
          />
          <Linker
            keyV="blog"
            title="blogs"
            handleHashChange={handleHashChange}
            active={getActive("blog")}
          />
        </nav>
      </div>
    </div>
  );
};

interface LinkerProps {
  keyV: string;
  title: string;
  active: string;
  handleHashChange: (hash: string) => void;
}

const Linker = (props: LinkerProps) => (
  <Link
    href={`#${props.keyV}`}
    onClick={() => props.handleHashChange(props.keyV)}
    className={`text-sm text-heading ${props.active}`}
  >
    {props.title}
  </Link>
);

const Logo = () => (
  <div className="text-white flex items-center lg:block text-base lg:text-lg font-bold">
    <Image
      src="/assets/logo.png"
      width={40}
      height={40}
      alt="logo"
      className="w-10 pr-2 md:pr-0 lg:w-16"
      priority
    />
    <div className="text-xs font-normal text-white text-opacity-30">
      ADEFEMI OSENI
    </div>
  </div>
);

export default Header;
