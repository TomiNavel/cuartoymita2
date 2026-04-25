import Link from "next/link";
import Logo from "./Logo";
import ManageCookiesButton from "./ManageCookiesButton";

export default function Footer() {
  return (
    <footer
      className="grid grid-cols-1 items-center gap-8 px-6 py-10 sm:grid-cols-[1fr_auto_1fr] md:px-16 md:py-12"
      style={{
        background: "var(--ink)",
        borderTop: "1px solid rgba(200,168,130,0.12)",
      }}
    >
      {/* Spacer izquierdo para centrar el bloque del medio */}
      <div className="hidden sm:block" />

      {/* Logo + frase centrados */}
      <div className="flex flex-col items-center gap-3 text-center">
        <Link href="/" className="no-underline">
          <Logo variant="dark" size={32} />
        </Link>
        <div
          className="text-[13px] tracking-[0.06em]"
          style={{ color: "rgba(250,246,238,0.55)" }}
        >
          Created by{" "}
          <a
            href="https://www.tominavel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b transition-colors hover:text-terra-light hover:border-terra-light"
            style={{
              color: "rgba(250,246,238,0.75)",
              borderColor: "rgba(212,151,106,0.3)",
            }}
          >
            TomiNavel
          </a>{" "}
          © {new Date().getFullYear()}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 sm:justify-end">
        <ManageCookiesButton />
        <Link
          href="/politica-cookies"
          className="text-[11px] uppercase tracking-[0.12em] no-underline transition-colors hover:text-terra-light"
          style={{ color: "rgba(250,246,238,0.3)" }}
        >
          Política de cookies
        </Link>
      </div>
    </footer>
  );
}
