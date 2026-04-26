export type Highlight = {
  readonly num: string;
  readonly title: string;
  readonly text: string;
};

export const highlights = [
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
] satisfies ReadonlyArray<Highlight>;
