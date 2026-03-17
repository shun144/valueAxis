"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { links } from "@/constants/links";

export default function header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-extrabold text-lg tracking-tight text-gray-900">
          shun<span className="text-indigo-500">.dev</span>
        </span>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold text-gray-500">
          {links.map((x) => {
            const isActive =
              x.href === "/" ? pathname === "/" : pathname.startsWith(x.href);
            return (
              <Link
                key={x.href}
                href={x.href}
                className={
                  isActive
                    ? "text-indigo-500 font-bold border-b-2 border-indigo-500"
                    : "text-gray-500 hover:text-indigo-500"
                }
              >
                {x.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          onClick={(prev) => setMenuOpen(!prev)}
          aria-label="menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3 text-sm font-semibold text-gray-600">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-indigo-500"
          >
            Top
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>
      )}
    </header>
  );
}
