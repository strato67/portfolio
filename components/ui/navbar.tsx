import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Navbar({ className }: { className?: string }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 lg:py-0 bg-neutral-900 mb-3 z-30 fixed w-full ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <Image
                src={"https://avatars.githubusercontent.com/u/43897976?v=4"}
                alt="Saaransh Sharma"
                width={36}
                height={36}
                className="h-full rounded-full"
              />
            </Link>
            <button
              className="text-white  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link
                href={"/#about"}
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                About
              </Link>
              <Link
                href={"/#skills"}
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Skills
              </Link>
              <Link
                href={"/#projects"}
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Projects
              </Link>
              <Link
                href={"/#contact"}
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
