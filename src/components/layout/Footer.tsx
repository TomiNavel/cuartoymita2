import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-6 px-16 py-12 sm:flex-row sm:items-center sm:justify-between"
      style={{
        background: "var(--ink)",
        borderTop: "1px solid rgba(200,168,130,0.12)",
      }}
    >
      <Link href="/" className="flex items-center no-underline">
        <Logo variant="dark" />
      </Link>

      <div
        className="text-[12px] tracking-[0.06em]"
        style={{ color: "rgba(250,246,238,0.25)" }}
      >
        © {new Date().getFullYear()} Cuarto y Mitá · Oviedo, Asturias
      </div>

      <div className="flex gap-5">
        <Link
          href="/politica-cookies"
          className="text-[11px] uppercase tracking-[0.12em] no-underline transition-colors"
          style={{ color: "rgba(250,246,238,0.3)" }}
        >
          Política de cookies
        </Link>
      </div>
    </footer>
  );
}
