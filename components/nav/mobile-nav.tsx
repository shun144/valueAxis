"use client";
import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RefObject } from "react";

interface Props {
  menuRef: RefObject<HTMLDivElement | null>;
  menuOpen: boolean;
  onClick: () => void;
}

export default function MobileNav({ menuRef, menuOpen, onClick }: Props) {
  const pathname = usePathname();
  return (
    <div
      ref={menuRef}
      className={`sm:hidden fixed top-14 right-0 h-full w-48 bg-gray-800 border-l border-gray-700 px-4 flex flex-col gap-3 text-base font-semibold text-gray-600 pt-4 transition-all duration-300 ease-in-out ${
        menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {links.map((x) => {
        const isActive =
          x.href === "/" ? pathname === "/" : pathname.startsWith(x.href);
        return (
          <Link
            key={x.href}
            href={x.href}
            onClick={onClick}
            className={isActive ? "text-indigo-400" : "text-gray-300"}
          >
            {x.label}
          </Link>
        );
      })}
    </div>
  );
}
