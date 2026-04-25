import Image from "next/image";
import Link from "next/link";

const CATEGORIES: {
  key: string;
  name: string;
  desc: string;
  image: string;
  badge?: string;
  featured?: boolean;
  imagePosition?: string;
  href?: string;
}[] = [
  {
    key: "cafes",
    name: "Cafés",
    desc: "Nuestro corazón. Granos de origen seleccionados, preparados con precisión y mucho cariño.",
    image: "/img-cafes.webp",
    badge: "Especialidad",
    featured: true,
    href: "/menu#cafes",
  },
  {
    key: "dulces",
    name: "Dulces",
    desc: "Elaboración casera, de cada día.",
    image: "/img-dulces.webp",
  },
  {
    key: "embutidos",
    name: "Embutidos",
    desc: "Curados con paciencia y tradición.",
    image: "/tabla-de-embutidos.webp",
    imagePosition: "center 40%",
    href: "/menu#embutidos",
  },
  {
    key: "quesos",
    name: "Quesos",
    desc: "Suaves o intensos, siempre artesanos.",
    image: "/img-quesos.webp",
    href: "/menu#quesos",
  },
  {
    key: "vinos",
    name: "Vinos",
    desc: "Una selección cuidada con historia en cada botella.",
    image: "/img-vinos.webp",
  },
  {
    key: "infusiones",
    name: "Infusiones",
    desc: "Hierbas y especias para momentos de calma.",
    image: "/img-infusiones.webp",
    href: "/menu#infusiones",
  },
];

const HIGHLIGHTS = [
  {
    num: "01",
    title: "Ingredientes de origen",
    text: "Seleccionamos cada producto directamente de productores locales y regionales de confianza.",
  },
  {
    num: "02",
    title: "Recetas de siempre",
    text: "Nuestras elaboraciones parten de recetas tradicionales transmitidas con el paso del tiempo.",
  },
  {
    num: "03",
    title: "Atención cercana",
    text: "Te asesoramos en cada elección. El trato personal forma parte de nuestra identidad.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="inicio"
        className="relative h-screen min-h-160 overflow-hidden"
      >
        <Image
          src="/intro.webp"
          alt="Interior de Cuarto y Mitá"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(35,20,8,0.30) 0%, rgba(35,20,8,0.18) 40%, rgba(35,20,8,0.65) 100%)",
          }}
        />
        <div className="relative z-2 flex h-full flex-col justify-end px-6 pb-16 md:px-16 md:pb-20">
          <p
            className="mb-4 flex items-center gap-3.5 text-[11px] uppercase tracking-[0.22em]"
            style={{ color: "var(--warm-mid)" }}
          >
            <span
              className="block h-px w-10"
              style={{ background: "var(--warm-mid)" }}
            />
            Café &amp; Tienda · Oviedo, Asturias
          </p>
          <h1
            className="mb-8 max-w-175 font-display font-light leading-[0.95] text-pretty"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(56px, 7vw, 100px)",
            }}
          >
            Saborea el
            <br />
            Arte de la <em style={{ color: "var(--gold)" }}>Tradición</em>
          </h1>
          <p
            className="mb-10 max-w-105 text-[15px] font-light leading-[1.7]"
            style={{ color: "rgba(250,246,238,0.75)" }}
          >
            Una taza de café que vale la pena. Y a su lado, dulces caseros,
            embutidos de la tierra, quesos curados y vinos con historia.
          </p>
          <Link
            href="#menu"
            className="inline-block self-start border-b pb-1 text-[11px] font-normal uppercase tracking-[0.16em] no-underline transition-colors hover:text-gold"
            style={{
              color: "var(--cream)",
              borderColor: "rgba(212,151,106,0.6)",
            }}
          >
            Explorar el menú →
          </Link>
        </div>
      </section>

      {/* MENÚ / CATEGORÍAS */}
      <section
        id="menu"
        className="px-6 py-16 md:px-16 md:py-24"
        style={{ background: "var(--brown)", color: "var(--cream)" }}
      >
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-16">
          <div>
            <p
              className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
              style={{ color: "var(--warm-mid)" }}
            >
              <span
                className="h-px w-7"
                style={{ background: "var(--warm-mid)" }}
              />
              Lo que ofrecemos
            </p>
            <h2
              className="font-display font-light leading-[1.05]"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(36px, 4.5vw, 62px)",
              }}
            >
              Nuestra <em style={{ color: "var(--gold)" }}>Carta</em>
            </h2>
          </div>
          <Link
            href="/menu"
            className="border-b pb-0.75 text-[11px] uppercase tracking-[0.15em] no-underline transition-colors"
            style={{
              color: "var(--warm-mid)",
              borderColor: "rgba(200,168,130,0.4)",
            }}
          >
            Ver carta completa →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
          {CATEGORIES.map((cat) => {
            const sizeClass = cat.featured
              ? "lg:col-span-2 min-h-72 sm:aspect-4/3 lg:min-h-100 lg:aspect-auto"
              : "aspect-4/3";
            const baseClass = `group relative overflow-hidden no-underline ${sizeClass}`;
            const inner = (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundPosition: cat.imagePosition ?? "center",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(23,12,4,0.85) 0%, rgba(23,12,4,0.1) 55%)",
                  }}
                />
                {cat.badge && (
                  <div
                    className="absolute left-6 top-6 px-3 py-1.25 text-[10px] font-normal uppercase tracking-[0.16em]"
                    style={{ color: "var(--dark)", background: "var(--gold)" }}
                  >
                    {cat.badge}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-7 pt-7">
                  <div
                    className="mb-1.5 font-display text-[28px] font-normal"
                    style={{ color: "var(--cream)" }}
                  >
                    {cat.name}
                  </div>
                  <div
                    className="text-[12px] font-light leading-[1.6]"
                    style={{ color: "rgba(250,246,238,0.6)" }}
                  >
                    {cat.desc}
                  </div>
                </div>
              </>
            );

            return cat.href ? (
              <Link
                key={cat.key}
                href={cat.href}
                className={`${baseClass} cursor-pointer`}
                style={{ background: "var(--terra-dk)" }}
              >
                {inner}
              </Link>
            ) : (
              <div
                key={cat.key}
                className={baseClass}
                style={{ background: "var(--terra-dk)" }}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <div
        className="grid grid-cols-1 gap-0.5 px-6 py-14 md:grid-cols-3 md:px-16 md:py-20"
        style={{ background: "var(--parchment)" }}
      >
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.num}
            className="px-6 py-10 md:px-10 md:py-12"
            style={{ background: "var(--cream)" }}
          >
            <div
              className="mb-1 font-display text-[52px] font-light leading-none"
              style={{ color: "var(--parchment)" }}
            >
              {h.num}
            </div>
            <div
              className="mb-3 font-display text-[22px] font-normal"
              style={{ color: "var(--brown)" }}
            >
              {h.title}
            </div>
            <p
              className="text-[13px] font-light leading-[1.75]"
              style={{ color: "#7a5a40" }}
            >
              {h.text}
            </p>
          </div>
        ))}
      </div>

      {/* SOBRE NOSOTROS */}
      <section
        id="cuartoymita"
        className="grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-20 md:px-16 md:py-24"
      >
        <div>
          <p
            className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--terra)" }}
          >
            <span
              className="h-px w-7 shrink-0"
              style={{ background: "var(--terra)" }}
            />
            Cuarto y Mitá
          </p>
          <h2
            className="font-display font-light leading-[1.05]"
            style={{
              color: "var(--brown)",
              fontSize: "clamp(36px, 4.5vw, 62px)",
            }}
          >
            Compromiso de
            <br />
            Calidad y <em style={{ color: "var(--terra)" }}>Tradición</em>
          </h2>
          <blockquote
            className="my-8 border-l-2 pl-6 font-display font-light italic leading-[1.4]"
            style={{
              color: "var(--terra)",
              borderColor: "var(--parchment)",
              fontSize: "clamp(24px, 2.8vw, 36px)",
            }}
          >
            &ldquo;Cada producto refleja nuestro esfuerzo por mantener la
            excelencia en cada detalle.&rdquo;
          </blockquote>
          <p
            className="mb-10 max-w-120 text-[15px] font-light leading-[1.85]"
            style={{ color: "#5a3f2a" }}
          >
            Desde la selección de ingredientes hasta la atención personalizada,
            trabajamos para brindarte una experiencia acogedora donde el buen
            gusto y la autenticidad van siempre de la mano. Somos una
            tienda-café con alma de los de antes.
          </p>
          <Link
            href="/cuartoymita"
            className="inline-block px-8 py-4 text-[11px] font-normal uppercase tracking-[0.16em] no-underline transition-colors"
            style={{ background: "var(--terra)", color: "var(--cream)" }}
          >
            Conocernos mejor
          </Link>
        </div>
        <div
          className="h-72 bg-cover bg-center md:h-140"
          style={{ backgroundImage: "url(/img-interior1.webp)" }}
        />
      </section>

      {/* CONTACTO RESUMEN */}
      <section
        className="grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-20 md:px-16 md:py-24"
        style={{ background: "var(--dark)", color: "var(--cream)" }}
      >
        <div>
          <p
            className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--gold)" }}
          >
            <span
              className="h-px w-7 shrink-0"
              style={{ background: "var(--gold)" }}
            />
            Encuéntranos
          </p>
          <h2
            className="font-display font-light leading-[1.05]"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(36px, 4.5vw, 62px)",
            }}
          >
            Ven a <em style={{ color: "var(--gold)" }}>vernos</em>
          </h2>
          <p
            className="my-8 text-[15px] font-light leading-[1.85]"
            style={{ color: "rgba(250,246,238,0.65)" }}
          >
            Estamos en el centro de Oviedo. Pásate cuando quieras — siempre
            habrá una buena taza de café esperándote.
          </p>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--terra-light)" }}
              >
                Dirección
              </span>
              <span
                className="font-display text-[22px] font-light"
                style={{ color: "var(--cream)" }}
              >
                Matemático Pedrayes 5, 33004 Oviedo
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--terra-light)" }}
              >
                Teléfono
              </span>
              <a
                href="tel:984085159"
                className="font-display text-[22px] font-light no-underline transition-colors hover:text-gold"
                style={{ color: "var(--cream)" }}
              >
                984 08 51 59
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--terra-light)" }}
              >
                Correo
              </span>
              <a
                href="mailto:info@cuartoymita.com"
                className="font-display text-[22px] font-light no-underline transition-colors hover:text-gold"
                style={{ color: "var(--cream)" }}
              >
                info@cuartoymita.com
              </a>
            </div>
          </div>
        </div>
        <div
          className="h-64 bg-cover bg-center md:h-95"
          style={{ backgroundImage: "url(/img-cafe-local.webp)" }}
        />
      </section>
    </>
  );
}
