"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import Logo from "./Logo";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/cuartoymita", label: "Cuarto y Mitá" },
];

export default function Header() {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const scrolled = useScrolled(60);
  const transparent = isLanding && !scrolled;

  return (
    <header
      data-transparent={transparent}
      className="group fixed inset-x-0 top-0 z-100 flex h-18 items-center justify-between px-12 transition-[background,box-shadow] duration-300"
      style={{
        background: transparent ? "transparent" : "var(--cream)",
        boxShadow: transparent ? "none" : "0 1px 0 rgba(35,26,16,0.12)",
      }}
    >
      <Link href="/" className="flex items-center no-underline">
        <Logo variant={transparent ? "dark" : "light"} />
      </Link>

      <nav className="flex items-center gap-9">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] font-normal uppercase tracking-[0.12em] no-underline transition-opacity"
              style={{
                color: transparent ? "var(--cream)" : "var(--dark)",
                opacity: active ? 1 : transparent ? 0.85 : 0.7,
              }}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contacto"
          className="border px-5 py-2 text-[12px] font-normal uppercase tracking-[0.12em] no-underline"
          style={{
            color: transparent ? "var(--cream)" : "var(--dark)",
            borderColor: transparent ? "var(--cream)" : "var(--dark)",
            opacity: 1,
          }}
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}
