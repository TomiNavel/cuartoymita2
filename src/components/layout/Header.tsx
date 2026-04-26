"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { navItems } from "@/data/nav";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);
  const transparent = isLanding && !scrolled && !open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const navColor = transparent ? "var(--cream)" : "var(--dark)";

  return (
    <header
      className="fixed inset-x-0 top-0 z-100 flex h-18 items-center justify-between px-6 transition-[background,box-shadow] duration-300 sm:px-12"
      style={{
        background: transparent ? "transparent" : "var(--cream)",
        boxShadow: transparent ? "none" : "0 1px 0 rgba(35,26,16,0.12)",
      }}
    >
      <Link
        href="/"
        className="flex items-center no-underline"
        aria-label="Cuarto y Mitá - Inicio"
      >
        <Logo variant={transparent ? "dark" : "light"} />
      </Link>

      {/* Nav escritorio */}
      <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="text-[12px] font-normal uppercase tracking-[0.12em] no-underline transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terra"
              style={{
                color: navColor,
                opacity: active ? 1 : transparent ? 0.85 : 0.7,
              }}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contacto"
          className="border px-5 py-2 text-[12px] font-normal uppercase tracking-[0.12em] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terra"
          style={{
            color: navColor,
            borderColor: navColor,
          }}
        >
          Contacto
        </Link>
      </nav>

      {/* Botón hamburguesa móvil */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 cursor-pointer items-center justify-center md:hidden"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        style={{ background: "transparent", border: 0, color: navColor }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>

      {/* Menú móvil overlay */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-18 bottom-0 z-99 flex flex-col gap-10 px-8 pt-16 pb-12 md:hidden"
        style={{ background: "var(--cream)" }}
      >
        <nav
          className="flex flex-col items-start gap-8"
          aria-label="Principal móvil"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="font-display text-[28px] font-light no-underline"
                style={{
                  color: active ? "var(--terra)" : "var(--brown)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contacto"
          aria-current={pathname === "/contacto" ? "page" : undefined}
          className="self-start border px-7 py-3.5 text-[12px] font-normal uppercase tracking-[0.16em] no-underline"
          style={{ color: "var(--dark)", borderColor: "var(--dark)" }}
        >
          Contacto
        </Link>
      </div>
    </header>
  );
}
