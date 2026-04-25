"use client";

import { resetCookiesDecision } from "./cookies";

export default function ManageCookiesButton() {
  return (
    <button
      type="button"
      onClick={() => resetCookiesDecision()}
      className="cursor-pointer text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-terra-light"
      style={{
        background: "none",
        border: 0,
        padding: 0,
        color: "rgba(250,246,238,0.3)",
      }}
    >
      Gestionar cookies
    </button>
  );
}
