"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const menus = [
  {
    id: "social",
    label: "Social",
    links: [
      { href: "/dashboard#connect", label: "Connect" },
      { href: "/dashboard#forum", label: "Forum" },
    ],
  },
  {
    id: "content",
    label: "Content",
    links: [
      { href: "/dashboard#blog", label: "Blog" },
      { href: "/dashboard#statistics", label: "Statistics" },
    ],
  },
];

export default function SiteNavigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  return (
    <nav className="site-navigation" aria-label="Main navigation">
      <div className="site-navigation-inner">
        {menus.map((menu) => {
          const isOpen = openMenu === menu.id;
          const dropdownId = `site-navigation-${menu.id}-dropdown`;

          return (
            <div
              className="site-navigation-menu"
              key={menu.id}
              onMouseEnter={() => setOpenMenu(menu.id)}
              onMouseLeave={(event) => {
                if (!event.currentTarget.contains(document.activeElement)) {
                  setOpenMenu(null);
                }
              }}
              onFocus={() => setOpenMenu(menu.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(document.activeElement)) {
                  setOpenMenu(null);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setOpenMenu(null);
                  triggerRefs.current[menu.id]?.focus();
                }
              }}
            >
              <button
                aria-controls={dropdownId}
                aria-expanded={isOpen}
                className="site-navigation-trigger"
                onClick={() => {
                  if (window.matchMedia("(max-width: 759px)").matches) {
                    setOpenMenu(isOpen ? null : menu.id);
                  }
                }}
                ref={(element) => {
                  triggerRefs.current[menu.id] = element;
                }}
                type="button"
              >
                {menu.label}
              </button>
              <div
                className="site-navigation-dropdown"
                hidden={!isOpen}
                id={dropdownId}
              >
                {menu.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
