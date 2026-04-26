export type ValueIconKey = "coffee" | "home" | "shield";

export type Value = {
  readonly name: string;
  readonly desc: string;
  readonly icon: ValueIconKey;
};

export const values = [
  {
    name: "Café de especialidad",
    desc: "Granos seleccionados de origen, tueste artesanal y preparación cuidada. Cada taza tiene su momento.",
    icon: "coffee",
  },
  {
    name: "Elaboración casera",
    desc: "Bizcochos, dulces y pinchos hechos cada día. El bizcocho de limón es, según nuestros clientes, de muerte.",
    icon: "home",
  },
  {
    name: "Producto de calidad",
    desc: "Probablemente la mejor variedad de quesos en Asturias. Una selección honesta de embutidos, conservas y vinos.",
    icon: "shield",
  },
] satisfies ReadonlyArray<Value>;
