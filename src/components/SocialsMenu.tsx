import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { LINKS } from "@/components/helpers";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-sky-100">
        <li className="hover:text-emerald-500">
          <Link href={LINKS.Instagram} target="_blank">
            <Instagram />
          </Link>
        </li>
        <li className="hover:text-emerald-500">
          <Link href={LINKS.Linkedin} target="_blank">
            <Linkedin />
          </Link>
        </li>
        <li className="hover:text-emerald-500">
          <Link href={LINKS.Github} target="_blank">
            <Github />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
