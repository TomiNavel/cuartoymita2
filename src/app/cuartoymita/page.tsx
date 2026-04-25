import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Cuarto y Mitá",
  description:
    "Conoce Cuarto y Mitá: una cafetería y tienda en Oviedo donde el detalle, el producto local y la atención cercana definen cada momento.",
};

const VALUES = [
  {
    name: "Café de especialidad",
    desc: "Granos seleccionados de origen, tueste artesanal y preparación cuidada. Cada taza tiene su momento.",
    icon: (
      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
    ),
  },
  {
    name: "Elaboración casera",
    desc: "Bizcochos, dulces y pinchos hechos cada día. El bizcocho de limón es, según nuestros clientes, de muerte.",
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    name: "Producto de calidad",
    desc: "Probablemente la mejor variedad de quesos en Asturias. Una selección honesta de embutidos, conservas y vinos.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export default function CuartoYMitaPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative mt-18 h-[60vh] min-h-100 overflow-hidden">
        <Image
          src="/intro.webp"
          alt="Interior de Cuarto y Mitá"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(35,20,8,0.15) 0%, rgba(35,20,8,0.72) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-16 py-14">
          <p
            className="mb-3.5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--warm-mid)" }}
          >
            <span
              className="h-px w-7"
              style={{ background: "var(--warm-mid)" }}
            />
            Oviedo, Asturias
          </p>
          <h1
            className="font-display font-light leading-none"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(48px, 5.5vw, 78px)",
            }}
          >
            Cuarto <em style={{ color: "var(--gold)" }}>y Mitá</em>
          </h1>
        </div>
      </div>

      {/* INTRO SPLIT */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-16 py-20">
          <p
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--terra)" }}
          >
            <span
              className="h-px w-7 shrink-0"
              style={{ background: "var(--terra)" }}
            />
            Quiénes somos
          </p>
          <h2
            className="font-display font-light leading-[1.05]"
            style={{
              color: "var(--brown)",
              fontSize: "clamp(36px, 4vw, 52px)",
            }}
          >
            Un lugar donde <em style={{ color: "var(--terra)" }}>importa</em> el
            detalle
          </h2>
          <blockquote
            className="border-l-2 pl-6 font-display font-light italic leading-[1.45]"
            style={{
              color: "var(--terra)",
              borderColor: "var(--parchment)",
              fontSize: "clamp(22px, 2.2vw, 30px)",
            }}
          >
            &ldquo;La comida es excelente, el lugar es muy agradable. Pero aún
            más por encima de todo eso, la atención, la amabilidad y el cariño
            con el que nos han atendido.&rdquo;
          </blockquote>
          <p
            className="text-[15px] font-light leading-[1.9]"
            style={{ color: "#5a3f2a" }}
          >
            Somos una cafetería y tienda en el corazón de Oviedo. Seleccionamos
            cada producto con cuidado: cafés de origen, dulces de elaboración
            casera, embutidos ibéricos, quesos artesanos y vinos con historia.
          </p>
          <p
            className="text-[15px] font-light leading-[1.9]"
            style={{ color: "#5a3f2a" }}
          >
            Marta y María están detrás del mostrador cada día, con el mismo
            cariño de siempre. Eso no se improvisa.
          </p>
        </div>
        <div
          className="min-h-120 bg-cover bg-center"
          style={{ backgroundImage: "url(/img-interior1.webp)" }}
        />
      </div>

      {/* VALORES */}
      <div
        className="grid grid-cols-1 gap-0.5 md:grid-cols-3"
        style={{ background: "var(--brown)" }}
      >
        {VALUES.map((v) => (
          <div
            key={v.name}
            className="flex flex-col gap-4 px-11 py-13"
            style={{ background: "var(--brown)", padding: "52px 44px" }}
          >
            <svg
              className="h-9 w-9"
              viewBox="0 0 24 24"
              stroke="var(--gold)"
              strokeWidth="1.2"
              fill="none"
            >
              {v.icon}
            </svg>
            <div
              className="font-display text-[24px] font-normal"
              style={{ color: "var(--cream)" }}
            >
              {v.name}
            </div>
            <p
              className="text-[13px] font-light leading-[1.8]"
              style={{ color: "rgba(250,246,238,0.55)" }}
            >
              {v.desc}
            </p>
          </div>
        ))}
      </div>

      {/* FEATURES (Terraza + Pet friendly) */}
      <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2">
        <div
          className="flex flex-col gap-5 px-14 py-18"
          style={{ background: "var(--parchment)" }}
        >
          <svg
            className="h-12 w-12"
            viewBox="0 0 24 24"
            stroke="var(--terra)"
            strokeWidth="1.2"
            fill="none"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M2 9h20" />
            <path d="M2 7c3-2 7-3 10-3s7 1 10 3" />
          </svg>
          <h3
            className="font-display text-[34px] font-light"
            style={{ color: "var(--brown)" }}
          >
            Terraza <em style={{ color: "var(--terra)" }}>cubierta</em>
          </h3>
          <p
            className="max-w-100 text-[14px] font-light leading-[1.85]"
            style={{ color: "#6a4a30" }}
          >
            Disfruta de nuestro espacio al aire libre sin preocuparte por el
            tiempo. Nuestra terraza cuenta con toldo para que el café siempre
            esté en su momento, llueva o haga sol.
          </p>
          <div
            className="inline-flex items-center gap-2 self-start border px-4 py-2 text-[11px] font-normal uppercase tracking-[0.14em]"
            style={{
              color: "var(--terra)",
              borderColor: "rgba(158,98,59,0.3)",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Disponible todo el año
          </div>
        </div>
        <div
          className="flex flex-col gap-5 px-14 py-18"
          style={{ background: "var(--cream)" }}
        >
          <svg
            className="h-12 w-12"
            viewBox="0 0 24 24"
            stroke="var(--terra)"
            strokeWidth="1.2"
            fill="none"
          >
            <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5" />
            <path d="M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z" />
            <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
          </svg>
          <h3
            className="font-display text-[34px] font-light"
            style={{ color: "var(--brown)" }}
          >
            Pet <em style={{ color: "var(--terra)" }}>Friendly</em>
          </h3>
          <p
            className="max-w-100 text-[14px] font-light leading-[1.85]"
            style={{ color: "#6a4a30" }}
          >
            Tus mascotas son bienvenidas. Pasar un buen rato con la familia, los
            amigos o con el perro es exactamente lo que buscamos en Cuarto y
            Mitá.
          </p>
          <div
            className="inline-flex items-center gap-2 self-start border px-4 py-2 text-[11px] font-normal uppercase tracking-[0.14em]"
            style={{
              color: "var(--terra)",
              borderColor: "rgba(158,98,59,0.3)",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Mascotas bienvenidas
          </div>
        </div>
      </div>

      {/* TESTIMONIOS */}
      <div className="px-16 py-24" style={{ background: "var(--cream)" }}>
        <div className="mb-16 text-center">
          <p
            className="mb-5 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--terra)" }}
          >
            Opiniones
          </p>
          <h2
            className="font-display font-light leading-[1.05]"
            style={{
              color: "var(--brown)",
              fontSize: "clamp(36px, 4vw, 52px)",
            }}
          >
            Lo que dicen{" "}
            <em style={{ color: "var(--terra)" }}>nuestros clientes</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-0.5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col gap-5 px-9 py-10"
              style={{ background: "var(--parchment)" }}
            >
              <div className="flex gap-0.75">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="var(--terra)"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p
                className="flex-1 font-display text-[17px] font-light italic leading-[1.7]"
                style={{ color: "var(--brown)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                className="flex items-center gap-3.5 border-t pt-4"
                style={{ borderColor: "rgba(158,98,59,0.15)" }}
              >
                <Image
                  src={t.avatar}
                  alt={t.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover filter-[sepia(15%)]"
                />
                <div>
                  <div
                    className="text-[13px] font-normal tracking-[0.04em]"
                    style={{ color: "var(--brown)" }}
                  >
                    {t.author}
                  </div>
                  <div
                    className="text-[11px] tracking-[0.06em]"
                    style={{ color: "var(--warm-mid)" }}
                  >
                    {t.via}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <div
        className="flex flex-col items-stretch justify-between gap-10 px-16 py-20 sm:flex-row sm:items-center"
        style={{ background: "var(--brown)" }}
      >
        <div>
          <h3
            className="mb-2.5 font-display font-light"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(32px, 3.5vw, 48px)",
            }}
          >
            ¿Te apetece <em style={{ color: "var(--gold)" }}>visitarnos?</em>
          </h3>
          <p
            className="text-[14px] font-light"
            style={{ color: "rgba(250,246,238,0.5)" }}
          >
            Matemático Pedrayes 5, Oviedo · 984 08 51 59
          </p>
        </div>
        <div className="flex shrink-0 gap-4">
          <Link
            href="/menu"
            className="border px-7 py-3.5 text-[11px] font-normal uppercase tracking-[0.16em] no-underline transition-colors"
            style={{
              color: "var(--cream)",
              borderColor: "rgba(250,246,238,0.3)",
            }}
          >
            Ver la carta
          </Link>
          <Link
            href="/contacto"
            className="px-7 py-3.5 text-[11px] font-normal uppercase tracking-[0.16em] no-underline transition-colors"
            style={{ background: "var(--terra)", color: "var(--cream)" }}
          >
            Cómo llegar
          </Link>
        </div>
      </div>
    </>
  );
}
