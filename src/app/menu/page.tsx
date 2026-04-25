import type { Metadata } from "next";
import MenuTabs from "@/components/menu/MenuTabs";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Carta de Cuarto y Mitá: cafés artesanales, infusiones, embutidos ibéricos y quesos artesanos.",
};

export default function MenuPage() {
  return (
    <>
      {/* HERO */}
      <div
        className="mt-18 grid grid-cols-1 items-end gap-6 px-6 pb-10 pt-12 md:grid-cols-[1fr_auto] md:gap-10 md:px-16 md:pb-14 md:pt-18"
        style={{ background: "var(--brown)" }}
      >
        <div>
          <p
            className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--warm-mid)" }}
          >
            <span
              className="h-px w-7"
              style={{ background: "var(--warm-mid)" }}
            />
            Lo que ofrecemos
          </p>
          <h1
            className="font-display font-light leading-none"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(48px, 5vw, 72px)",
            }}
          >
            Nuestra <em style={{ color: "var(--gold)" }}>Carta</em>
          </h1>
        </div>
        <p
          className="max-w-85 text-[14px] font-light leading-[1.8] md:text-right"
          style={{ color: "rgba(250,246,238,0.55)" }}
        >
          Cada producto seleccionado con cuidado. Cada taza, una historia. Cada
          bocado, una tradición.
        </p>
      </div>

      <MenuTabs />
    </>
  );
}
