export type HomeCategory = {
  readonly key: string;
  readonly name: string;
  readonly desc: string;
  readonly image: `/${string}`;
  readonly badge?: string;
  readonly featured?: boolean;
  readonly imagePosition?: string;
  readonly href?: `/${string}`;
};

export const homeCategories = [
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
] satisfies ReadonlyArray<HomeCategory>;