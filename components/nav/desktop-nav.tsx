"use client";
import React from "react";
import { links } from "@/constants/links";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold text-gray-500">
      {links.map((x) => {
        const isActive =
          x.href === "/" ? pathname === "/" : pathname.startsWith(x.href);
        return (
          <Link
            key={x.href}
            href={x.href}
            className={`border-b-2 pb-0.5 transition-colors duration-200  ${
              isActive
                ? "text-indigo-500 font-bold border-indigo-500"
                : "text-gray-500 border-transparent "
            }`}
          >
            {x.label}
          </Link>
        );
      })}
    </nav>
  );
}
