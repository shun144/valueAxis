"use client";
import Link from "next/link";
import DesktopNav from "./nav/desktop-nav";
import MobileHamburgerButton from "./nav/mobile-hamburger-button";
import MobileNav from "./nav/mobile-nav";
import { useMobileMenu } from "./use-mobile-menu";

export default function header() {
  const { menuOpen, toggleMenu, menuRef, hamburgerRef } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href={"/"}
          className="font-extrabold text-lg tracking-tight text-gray-900"
        >
          shun<span className="text-indigo-500">.dev</span>
        </Link>

        <DesktopNav />

        <MobileHamburgerButton
          hamburgerRef={hamburgerRef}
          menuOpen={menuOpen}
          onClick={toggleMenu}
        />
      </div>

      <MobileNav menuRef={menuRef} menuOpen={menuOpen} onClick={toggleMenu} />
    </header>
  );
}
