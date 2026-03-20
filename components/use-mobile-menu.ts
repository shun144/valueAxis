import React, { useEffect, useRef, useState } from "react";

export const useMobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current || !hamburgerRef.current) return;
      const isOutsideMenu = !menuRef.current.contains(e.target as Node);
      const isOutsideHamburger = !hamburgerRef.current.contains(
        e.target as Node,
      );

      if (isOutsideMenu && isOutsideHamburger) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { menuOpen, toggleMenu, menuRef, hamburgerRef };
};
