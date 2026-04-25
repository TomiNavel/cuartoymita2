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
}[] = [
  {
    key: "cafes",
    name: "Cafés",
    desc: "Nuestro corazón. Granos de origen seleccionados, preparados con precisión y mucho cariño.",
    image: "/img-cafes.jpg",
    badge: "Especialidad",
    featured: true,
  },
  {
    key: "dulces",
    name: "Dulces",
    desc: "Elaboración casera, de cada día.",
    image: "/img-dulces.jpg",
  },
  {
    key: "embutidos",
    name: "Embutidos",
    desc: "Curados con paciencia y tradición.",
    image: "/tabla-de-embutidos.jpg",
    imagePosition: "center 40%",
  },
  {
    key: "quesos",
    name: "Quesos",
    desc: "Suaves o intensos, siempre artesanos.",
    image: "/img-quesos.jpg",
  },
  {
    key: "vinos",
    name: "Vinos",
    desc: "Una selección cuidada con historia en cada botella.",
    image: "/img-vinos.jpg",
  },
  {
    key: "infusiones",
    name: "Infusiones",
    desc: "Hierbas y especias para momentos de calma.",
    image: "/img-infusiones.jpg",
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
        <div className="relative z-2 flex h-full flex-col justify-end px-16 pb-20">
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
        className="px-16 py-24"
        style={{ background: "var(--brown)", color: "var(--cream)" }}
      >
        <div className="mb-16 flex items-end justify-between">
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

        <div className="grid grid-cols-4 grid-rows-[auto_auto] gap-0.5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href="/menu"
              className={`group relative cursor-pointer overflow-hidden no-underline ${
                cat.featured ? "col-span-2 min-h-100" : "aspect-4/3"
              }`}
              style={{ background: "var(--terra-dk)" }}
            >
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
            </Link>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <div
        className="grid grid-cols-1 gap-0.5 px-16 py-20 md:grid-cols-3"
        style={{ background: "var(--parchment)" }}
      >
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.num}
            className="px-10 py-12"
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
        className="grid grid-cols-1 items-center gap-20 px-16 py-24 md:grid-cols-2"
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
        <div className="grid h-140 grid-rows-2 gap-3">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: "url(/img-interior1.jpg)" }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: "url(/img-cafe-local.jpg)" }}
          />
        </div>
      </section>

      {/* CONTACTO RESUMEN */}
      <section
        className="grid grid-cols-1 items-center gap-20 px-16 py-24 md:grid-cols-2"
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
          className="h-95 bg-cover bg-center"
          style={{ backgroundImage: "url(/img-cafe-local.jpg)" }}
        />
      </section>
    </>
  );
}
