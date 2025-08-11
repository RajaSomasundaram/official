"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface menuInterface {
  home?: boolean;
  isContactVisible?: boolean;
}

const Menubar = ({ home, isContactVisible = false }: menuInterface) => {
  const pathname = usePathname();
  return (
    <nav className={`${home && "hidden lg:block md:block"}`}>
      <ul className="flex space-x-6 font-bold text-[20px] text-sky-100">
        <li className={`hover:text-emerald-400 ${pathname === "/" && "text-emerald-400"}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`hover:text-emerald-400 ${pathname === "/projects" && "text-emerald-400"}`}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={`hover:text-emerald-400 ${pathname === "/about" && "text-emerald-400"}`}>
          <Link href="/about">About</Link>
        </li>
        {isContactVisible && (
          <li className={`hover:text-emerald-400 ${pathname === "/contact" && "text-emerald-400"}`}>
            <Link href="/contact">Contact</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menubar;
