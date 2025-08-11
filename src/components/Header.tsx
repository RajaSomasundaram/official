"use client";
// import Image from "next/image";
import Menubar from "./Menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AlignJustify, X, PhoneIcon } from "lucide-react";
import { LINKS } from "@/components/helpers";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (menuOpen && target && !target.closest("#mobile-menu")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={`fixed w-full ${!menuOpen ? "backdrop-blur-xl" : "bg-zinc-900"} bg-zinc-900 shadow-md z-50`}>
      <main className="flex-none h-auto px-4 md:px-8 lg:px-28 w-full m-auto py-4">
        <section className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-emerald-400 text-[20px] font-bold">
            Raja Somasundaram
          </Link>

          {/* Menu Button for Mobile/Tablet */}
          <button
            className="lg:hidden md:hidden p-2 rounded-md focus:outline-none bg-transparent"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <X className="bg-sky-100" /> : <AlignJustify className="bg-sky-100" />}
          </button>

          {/* Desktop Menu */}
          <Menubar home={true} />

          {/* Contact Button */}
          <Link
            href={LINKS.Contact}
            className={`hidden md:block lg:block p-2 rounded-full hover:bg-emerald-500 ${
              pathname == "/contact" ? "bg-emerald-500" : "bg-white"
            }`}
          >
            <PhoneIcon className={`w-6 h-6 text-black rounded-full`} />
          </Link>
        </section>

        {/* Mobile/Tablet Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden lg:hidden z-50"
          >
            <nav>
              <ul className="flex flex-col space-y-4 font-bold text-[20px] text-[#4e525a]">
                <Link href="/" className={`hover:text-emerald-500 ${pathname === "/" && "text-emerald-500"}`}>
                  <li>Home</li>
                </Link>
                <Link
                  href="/projects"
                  className={`hover:text-emerald-500 ${pathname === "/projects" && "text-emerald-500"}`}
                >
                  <li>Projects</li>
                </Link>
                <Link href="/about" className={`hover:text-emerald-500 ${pathname === "/about" && "text-emerald-500"}`}>
                  <li>About</li>
                </Link>
                <Link
                  href={LINKS.Contact}
                  className={`hover:text-emerald-500 ${pathname === "/contact" && "text-emerald-500"}`}
                >
                  <li>Get In Touch</li>
                </Link>
              </ul>
            </nav>
          </div>
        )}
      </main>
    </header>
  );
};

export default Header;
