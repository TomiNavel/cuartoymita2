"use client";

import Link from "next/link";
import { useState } from "react";

const STORAGE_KEY = "cookiesDecision";

export default function CookiesBannerClient() {
  const [dismissed, setDismissed] = useState(
    () => !!localStorage.getItem(STORAGE_KEY),
  );
  const [closing, setClosing] = useState(false);

  function decide(decision: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, decision);
    setClosing(true);
    setTimeout(() => setDismissed(true), 300);
  }

  if (dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-999 flex flex-col items-stretch justify-between gap-4 border-t px-6 py-4 sm:flex-row sm:items-center sm:gap-6 md:px-12"
      style={{
        background: "var(--ink)",
        borderColor: "rgba(200,168,130,0.15)",
        animation: closing ? "none" : "slide-up 0.4s ease",
        opacity: closing ? 0 : 1,
        transform: closing ? "translateY(100%)" : "translateY(0)",
        transition: "opacity 0.3s, transform 0.3s",
      }}
    >
      <p
        className="text-[13px] font-light leading-relaxed"
        style={{ color: "rgba(250,246,238,0.6)" }}
      >
        Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
        <Link
          href="/politica-cookies"
          className="border-b no-underline transition-colors"
          style={{
            color: "var(--gold)",
            borderColor: "rgba(212,151,106,0.4)",
          }}
        >
          política de cookies
        </Link>
        .
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          type="button"
          onClick={() => decide("rejected")}
          className="cursor-pointer border px-5 py-2.5 text-[11px] font-normal uppercase tracking-[0.12em] transition-colors"
          style={{
            background: "none",
            borderColor: "rgba(200,168,130,0.25)",
            color: "rgba(250,246,238,0.5)",
          }}
        >
          Solo necesarias
        </button>
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="cursor-pointer border-0 px-6 py-2.5 text-[11px] font-normal uppercase tracking-[0.12em] transition-colors"
          style={{
            background: "var(--terra)",
            color: "var(--cream)",
          }}
        >
          Aceptar todas
        </button>
      </div>
    </div>
  );
}
