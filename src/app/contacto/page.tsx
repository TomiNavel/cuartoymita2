import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Encuentra Cuarto y Mitá en Matemático Pedrayes 5, Oviedo. Teléfono, correo y horarios.",
};

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <div
        className="mt-18 px-16 pb-14 pt-18"
        style={{ background: "var(--brown)" }}
      >
        <p
          className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
          style={{ color: "var(--warm-mid)" }}
        >
          <span
            className="h-px w-7"
            style={{ background: "var(--warm-mid)" }}
          />
          Estamos aquí
        </p>
        <h1
          className="mb-5 font-display font-light leading-none"
          style={{ color: "var(--cream)", fontSize: "clamp(48px, 5vw, 72px)" }}
        >
          Ven a <em style={{ color: "var(--gold)" }}>vernos</em>
        </h1>
        <p
          className="max-w-120 text-[15px] font-light leading-[1.8]"
          style={{ color: "rgba(250,246,238,0.55)" }}
        >
          Estamos en el centro de Oviedo. Siempre habrá una buena taza de café
          esperándote.
        </p>
      </div>

      {/* MAPA + INFO */}
      <div className="grid min-h-150 grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.3!2d-5.84476!3d43.36202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368cc7ff96c3df%3A0x1234!2sMatem%C3%A1tico+Pedrayes+5%2C+33004+Oviedo%2C+Asturias!5e0!3m2!1ses!2ses!4v1714000000000!5m2!1ses!2ses"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Cuarto y Mitá en Oviedo"
            className="block h-full min-h-125 w-full border-0"
            style={{ filter: "sepia(20%) contrast(0.95) brightness(0.97)" }}
          />
        </div>
        <div
          className="flex flex-col justify-center gap-9 px-14 py-12"
          style={{ background: "var(--cream)" }}
        >
          <div>
            <p
              className="mb-4 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "var(--terra)" }}
            >
              <span
                className="h-px w-5"
                style={{ background: "var(--terra)" }}
              />
              Dirección
            </p>
            <a
              href="https://maps.google.com/?q=Matem%C3%A1tico+Pedrayes+5,+Oviedo"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-display text-[26px] font-light leading-[1.35] no-underline transition-colors hover:text-terra"
              style={{ color: "var(--brown)" }}
            >
              Matemático Pedrayes 5
              <br />
              33004 Oviedo, Asturias
            </a>
          </div>

          <div>
            <p
              className="mb-4 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "var(--terra)" }}
            >
              <span
                className="h-px w-5"
                style={{ background: "var(--terra)" }}
              />
              Teléfono
            </p>
            <a
              href="tel:984085159"
              className="block font-display text-[26px] font-light leading-[1.35] no-underline transition-colors hover:text-terra"
              style={{ color: "var(--brown)" }}
            >
              984 08 51 59
            </a>
            <p
              className="mt-1.5 text-[13px] font-light leading-[1.6]"
              style={{ color: "#8a6a50" }}
            >
              Reservas y consultas
            </p>
          </div>

          <div>
            <p
              className="mb-4 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "var(--terra)" }}
            >
              <span
                className="h-px w-5"
                style={{ background: "var(--terra)" }}
              />
              Correo electrónico
            </p>
            <a
              href="mailto:info@cuartoymita.com"
              className="block font-display text-[26px] font-light leading-[1.35] no-underline transition-colors hover:text-terra"
              style={{ color: "var(--brown)" }}
            >
              info@cuartoymita.com
            </a>
            <p
              className="mt-1.5 text-[13px] font-light leading-[1.6]"
              style={{ color: "#8a6a50" }}
            >
              Respondemos en menos de 24 horas
            </p>
          </div>
        </div>
      </div>

      {/* VISIT BLOCK */}
      <div className="grid min-h-120 grid-cols-1 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <Image
            src="/intro.webp"
            alt="Interior de Cuarto y Mitá"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
        <div
          className="flex flex-col justify-center gap-5 px-14 py-16"
          style={{ background: "var(--brown)" }}
        >
          <p
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--warm-mid)" }}
          >
            <span
              className="h-px w-7"
              style={{ background: "var(--warm-mid)" }}
            />
            El local
          </p>
          <blockquote
            className="border-l-2 pl-5 font-display font-light italic leading-[1.45]"
            style={{
              color: "var(--gold)",
              borderColor: "rgba(200,168,130,0.3)",
              fontSize: "clamp(22px, 2.2vw, 30px)",
            }}
          >
            &ldquo;Un lugar donde el tiempo pasa más despacio y el café siempre
            está en su punto.&rdquo;
          </blockquote>
          <p
            className="text-[14px] font-light leading-[1.85]"
            style={{ color: "rgba(250,246,238,0.6)" }}
          >
            En Cuarto y Mitá nos tomamos en serio cada detalle: el origen del
            grano, el punto de tueste, la temperatura del agua. Pero sobre todo
            nos tomamos en serio a las personas que entran por nuestra puerta.
          </p>
          <p
            className="text-[14px] font-light leading-[1.85]"
            style={{ color: "rgba(250,246,238,0.6)" }}
          >
            Pásate cuando quieras. Sin reserva, sin prisas.
          </p>
          <Link
            href="/menu"
            className="mt-2 inline-block self-start border-b pb-1 text-[11px] font-normal uppercase tracking-[0.16em] no-underline transition-colors hover:text-gold"
            style={{
              color: "var(--cream)",
              borderColor: "rgba(212,151,106,0.5)",
            }}
          >
            Ver nuestra carta →
          </Link>
        </div>
      </div>
    </>
  );
}
