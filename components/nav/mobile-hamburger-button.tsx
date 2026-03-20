"use client";
import { RefObject } from "react";

interface Props {
  hamburgerRef: RefObject<HTMLButtonElement | null>;
  menuOpen: boolean;
  onClick: () => void;
}
export default function MobileHamburgerButton({
  hamburgerRef,
  menuOpen,
  onClick,
}: Props) {
  return (
    <button
      ref={hamburgerRef}
      className="sm:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
      onClick={onClick}
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
  );
}
