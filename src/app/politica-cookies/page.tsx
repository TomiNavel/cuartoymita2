import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre el uso de cookies en cuartoymita.com y cómo gestionarlas desde tu navegador.",
};

const SECTIONS = [
  {
    num: "01",
    title: "¿Qué son las cookies?",
    body: (
      <p>
        Las cookies son pequeños archivos de texto almacenados en tu dispositivo
        cuando visitas un sitio web. Permiten recordar preferencias, mejorar la
        navegación y recopilar estadísticas sobre el uso del sitio.
      </p>
    ),
  },
  {
    num: "02",
    title: "¿Qué tipos de cookies usamos?",
    body: (
      <ul className="mt-1 flex list-none flex-col gap-3">
        {[
          {
            label: "Cookies esenciales:",
            text: " Necesarias para el funcionamiento básico del sitio.",
          },
          {
            label: "Cookies analíticas:",
            text: " Nos ayudan a entender cómo los usuarios interactúan con el sitio (Google Analytics, etc.).",
          },
          {
            label: "Cookies de funcionalidad:",
            text: " Guardan preferencias del usuario, como idioma o configuración de cookies.",
          },
        ].map((it) => (
          <li
            key={it.label}
            className="relative pl-5 text-[14px] font-light leading-[1.75] before:absolute before:left-0 before:font-light before:text-terra before:content-['—']"
            style={{ color: "#5a3f2a" }}
          >
            <strong
              className="font-medium"
              style={{ color: "var(--brown)" }}
            >
              {it.label}
            </strong>
            {it.text}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "03",
    title: "¿Cómo gestionar las cookies?",
    body: (
      <>
        <p>
          Puedes configurar tu navegador para aceptar, rechazar o eliminar
          cookies en cualquier momento. A continuación, algunos enlaces de
          ayuda:
        </p>
        <ul className="mt-3 flex list-none flex-col gap-2">
          {[
            {
              label: "Google Chrome",
              href: "https://support.google.com/chrome/answer/95647?hl=es",
            },
            {
              label: "Mozilla Firefox",
              href: "https://support.mozilla.org/es/kb/Borrar%20cookies",
            },
            {
              label: "Safari",
              href: "https://support.apple.com/es-es/HT201265",
            },
            {
              label: "Internet Explorer / Edge",
              href: "https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies",
            },
          ].map((l) => (
            <li
              key={l.href}
              className="relative pl-5 text-[14px] before:absolute before:left-0 before:text-terra before:content-['→']"
            >
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b pb-px no-underline transition-colors"
                style={{
                  color: "var(--terra)",
                  borderColor: "rgba(158,98,59,0.3)",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "04",
    title: "Cambios en esta política",
    body: (
      <p>
        Nos reservamos el derecho de actualizar esta política en cualquier
        momento. Te recomendamos revisarla periódicamente para estar informado
        sobre cómo protegemos tu información.
      </p>
    ),
  },
];

export default function PoliticaCookiesPage() {
  return (
    <>
      {/* HERO */}
      <div
        className="mt-18 px-16 pb-11 pt-14"
        style={{ background: "var(--brown)" }}
      >
        <p
          className="mb-3.5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
          style={{ color: "var(--warm-mid)" }}
        >
          <span
            className="h-px w-7"
            style={{ background: "var(--warm-mid)" }}
          />
          Legal
        </p>
        <h1
          className="font-display font-light leading-none"
          style={{ color: "var(--cream)", fontSize: "clamp(36px, 4vw, 56px)" }}
        >
          Política de <em style={{ color: "var(--gold)" }}>Cookies</em>
        </h1>
      </div>

      {/* CONTENIDO */}
      <div className="mx-auto max-w-190 px-12 pb-30 pt-18">
        <p
          className="mb-14 border-b pb-10 text-[16px] font-light leading-[1.85]"
          style={{ color: "#5a3f2a", borderColor: "var(--parchment)" }}
        >
          En <strong>Cuarto y Mitá</strong> utilizamos cookies para mejorar la
          experiencia del usuario. Al continuar navegando en nuestro sitio,
          aceptas el uso de cookies de acuerdo con esta política.
        </p>

        {SECTIONS.map((s) => (
          <div key={s.num} className="mb-12">
            <h2
              className="mb-4 flex items-baseline gap-3 font-display text-[26px] font-normal"
              style={{ color: "var(--brown)" }}
            >
              <span
                className="text-[13px] font-light tracking-widest"
                style={{
                  color: "var(--terra)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {s.num} —
              </span>
              {s.title}
            </h2>
            <div
              className="text-[14px] font-light leading-[1.85] [&_p]:mb-3 [&_p:last-child]:mb-0"
              style={{ color: "#5a3f2a" }}
            >
              {s.body}
            </div>
          </div>
        ))}

        <div
          className="mt-14 border-t pt-8"
          style={{ borderColor: "var(--parchment)" }}
        >
          <Link
            href="/"
            className="inline-block border-b pb-0.75 text-[11px] font-normal uppercase tracking-[0.16em] no-underline transition-colors hover:text-terra hover:border-terra"
            style={{
              color: "var(--dark)",
              borderColor: "rgba(35,26,16,0.3)",
            }}
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
}
