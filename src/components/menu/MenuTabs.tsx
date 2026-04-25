"use client";

import { useEffect, useState } from "react";
import { menuCategories, type MenuCategory } from "@/data/menu";

const VALID_IDS = menuCategories.map((c) => c.id);

function isValidId(value: string): value is MenuCategory["id"] {
  return (VALID_IDS as readonly string[]).includes(value);
}

export default function MenuTabs() {
  const [active, setActive] = useState<MenuCategory["id"]>("cafes");
  const current = menuCategories.find((c) => c.id === active)!;

  useEffect(() => {
    function syncFromHash() {
      const hash = window.location.hash.slice(1);
      if (isValidId(hash)) setActive(hash);
    }
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function selectTab(id: MenuCategory["id"]) {
    setActive(id);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${id}`);
    }
  }

  return (
    <>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Categorías del menú"
        className="sticky top-18 z-90 flex border-b md:px-16"
        style={{
          background: "var(--cream)",
          borderColor: "var(--parchment)",
        }}
      >
        {menuCategories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              onClick={() => selectTab(cat.id)}
              className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 border-0 border-b-2 bg-transparent px-2 py-4 text-[10px] font-normal uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-terra md:flex-none md:gap-3 md:px-9 md:py-6 md:text-[14px] md:tracking-[0.18em]"
              style={{
                color: isActive ? "var(--terra)" : "rgba(35,26,16,0.45)",
                borderBottomColor: isActive ? "var(--terra)" : "transparent",
              }}
            >
              <span
                className="h-1 w-1 rounded-full md:h-1.5 md:w-1.5"
                style={{
                  background: "currentColor",
                  opacity: isActive ? 1 : 0.5,
                }}
                aria-hidden="true"
              />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Body */}
      <div className="mx-auto max-w-300 px-6 py-14 md:px-16 md:py-24">
        <div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="animate-[fade-up_0.35s_ease]"
        >
          <div
            className="mb-10 grid grid-cols-1 items-end gap-6 border-b pb-8 md:mb-16 md:grid-cols-2 md:gap-14 md:pb-10"
            style={{ borderColor: "var(--parchment)" }}
          >
            <h2
              className="order-2 font-display font-light leading-none md:order-1"
              style={{
                color: "var(--brown)",
                fontSize: "clamp(36px, 4vw, 60px)",
              }}
            >
              {current.titlePrefix}{" "}
              <em style={{ color: "var(--terra)" }}>{current.titleEm}</em>
            </h2>
            <div
              className="relative order-1 h-40 overflow-hidden bg-cover md:order-2 md:h-55"
              style={{
                backgroundImage: `url(${current.image})`,
                backgroundPosition: current.imagePosition ?? "center",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(250,246,238,0.3), transparent)",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2">
            {current.items.map((item) => (
              <div
                key={item.name}
                className="border border-transparent px-6 py-6 transition-colors hover:border-[rgba(158,98,59,0.15)] hover:[background:var(--parchment)] md:px-9 md:py-8"
                style={{ background: "var(--cream)" }}
              >
                <div className="mb-2.5 flex items-baseline justify-between gap-4">
                  <div
                    className="font-display text-[22px] font-normal leading-[1.2]"
                    style={{ color: "var(--brown)" }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="h-px min-w-5 flex-1 self-center"
                    style={{ background: "var(--parchment)" }}
                  />
                </div>
                <p
                  className="text-[13px] font-light leading-[1.75]"
                  style={{ color: "#7a5a40" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {current.note && (
            <div
              className="mt-12 flex items-center gap-5 px-9 py-7"
              style={{ background: "var(--parchment)" }}
            >
              <svg
                className="h-8 w-8 shrink-0 opacity-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--terra)"
                strokeWidth="1.2"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
              <p
                className="text-[13px] font-light italic leading-[1.7]"
                style={{ color: "#7a5a40" }}
              >
                {current.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
