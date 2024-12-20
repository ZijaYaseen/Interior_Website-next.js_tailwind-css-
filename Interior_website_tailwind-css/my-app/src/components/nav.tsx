"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Gallery", path: "/Gallery" },
  { name: "Projects", path: "/Projects" },
  { name: "Contact", path: "/Contact" },
];

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`uppercase ${linkStyles}`}>
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={underlineStyles}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
