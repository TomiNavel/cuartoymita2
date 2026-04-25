export type MenuItem = {
  name: string;
  description: string;
};

export type MenuCategory = {
  id: "cafes" | "infusiones" | "embutidos" | "quesos";
  label: string;
  titleEm: string;
  titlePrefix: string;
  image: string;
  imagePosition?: string;
  items: MenuItem[];
  note?: string;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "cafes",
    label: "Cafés",
    titlePrefix: "Cafés",
    titleEm: "artesanales",
    image: "/img-cafes.jpg",
    items: [
      {
        name: "Espresso Clásico",
        description:
          "Un espresso intenso y aromático, preparado con granos seleccionados para un sabor fuerte y equilibrado.",
      },
      {
        name: "Café Americano",
        description:
          "Un espresso alargado con agua caliente, ofreciendo un café suave pero con cuerpo.",
      },
      {
        name: "Capuchino",
        description:
          "Café espresso con leche vaporizada y espuma cremosa, coronado con un toque de cacao.",
      },
      {
        name: "Latte Macchiato",
        description:
          "Leche vaporizada con un toque de espresso, creando una combinación suave y cremosa.",
      },
      {
        name: "Mocha",
        description:
          "Una mezcla deliciosa de espresso, chocolate y leche, con un toque de crema batida.",
      },
      {
        name: "Flat White",
        description:
          "Una versión más intensa del latte, con más espresso y menos espuma para un sabor más pronunciado.",
      },
      {
        name: "Café Bombón",
        description:
          "Un espresso con leche condensada, ofreciendo un sabor dulce y equilibrado.",
      },
      {
        name: "Affogato",
        description:
          "Una combinación irresistible de espresso caliente servido sobre una bola de helado de vainilla.",
      },
    ],
    note: "Todos nuestros cafés se elaboran con granos de origen seleccionados y tostados artesanalmente. Pregunta a nuestro barista por las variedades del día.",
  },
  {
    id: "infusiones",
    label: "Infusiones",
    titlePrefix: "Infusiones",
    titleEm: "y tés",
    image: "/img-infusiones.jpg",
    items: [
      {
        name: "Té Verde Sencha",
        description:
          "Té verde japonés de hojas frescas con un sabor herbal y ligeramente dulce, rico en antioxidantes.",
      },
      {
        name: "Manzanilla",
        description:
          "Infusión suave y relajante con notas florales, ideal para calmar el cuerpo y la mente.",
      },
      {
        name: "Rooibos Vainilla",
        description:
          "Infusión sudafricana sin cafeína con un toque de vainilla, de sabor dulce y afrutado.",
      },
      {
        name: "Té Chai",
        description:
          "Mezcla especiada de té negro con canela, cardamomo, jengibre y clavo, perfecta para un toque exótico.",
      },
      {
        name: "Menta Poleo",
        description:
          "Refrescante infusión de menta y poleo, con propiedades digestivas y un aroma intenso.",
      },
      {
        name: "Té Rojo Pu-erh",
        description:
          "Té fermentado con notas terrosas, conocido por sus propiedades digestivas y su sabor robusto.",
      },
      {
        name: "Flor de Hibisco",
        description:
          "Infusión de color vibrante con un toque ácido y afrutado, rica en vitamina C y antioxidantes.",
      },
      {
        name: "Lavanda y Melisa",
        description:
          "Infusión relajante con notas florales, ideal para reducir el estrés y promover el descanso.",
      },
    ],
  },
  {
    id: "embutidos",
    label: "Embutidos",
    titlePrefix: "Embutidos",
    titleEm: "ibéricos",
    image: "/tabla-de-embutidos.jpg",
    imagePosition: "center 40%",
    items: [
      {
        name: "Jamón Ibérico",
        description:
          "Jamón curado de cerdo ibérico, de sabor intenso y textura suave.",
      },
      {
        name: "Chorizo Ibérico",
        description:
          "Chorizo curado con pimentón, ajo y especias, de sabor ahumado y ligeramente picante.",
      },
      {
        name: "Salchichón Ibérico",
        description:
          "Salchichón elaborado con carne magra de cerdo ibérico, con un toque de pimienta negra.",
      },
      {
        name: "Lomo Embuchado",
        description:
          "Lomo de cerdo curado con pimentón y ajo, de textura tierna y sabor intenso.",
      },
      {
        name: "Morcilla de Burgos",
        description:
          "Embutido a base de arroz, cebolla y sangre de cerdo, con un sabor especiado y textura cremosa.",
      },
      {
        name: "Fuet",
        description:
          "Embutido fino de cerdo con una curación suave y un sabor delicado.",
      },
      {
        name: "Longaniza de Payés",
        description:
          "Longaniza curada con un toque de pimienta y especias mediterráneas.",
      },
      {
        name: "Sobrasada Mallorquina",
        description:
          "Embutido untuoso de cerdo con pimentón, típico de Mallorca.",
      },
    ],
    note: "Todos nuestros embutidos son de origen ibérico, seleccionados directamente de productores de confianza. Pregunta por nuestra tabla de degustación del día.",
  },
  {
    id: "quesos",
    label: "Quesos",
    titlePrefix: "Quesos",
    titleEm: "artesanos",
    image: "/img-quesos.jpg",
    items: [
      {
        name: "Queso Manchego",
        description:
          "Queso de oveja con denominación de origen, de sabor intenso y textura firme.",
      },
      {
        name: "Queso Idiazábal",
        description:
          "Queso de leche de oveja con un característico toque ahumado.",
      },
      {
        name: "Queso Cabrales",
        description:
          "Queso azul elaborado con leche de vaca y oveja, de sabor fuerte y cremoso.",
      },
      {
        name: "Queso Mahón",
        description:
          "Queso de vaca con una curación media, de sabor ligeramente ácido y textura firme.",
      },
      {
        name: "Queso Tetilla",
        description:
          "Queso gallego de vaca con una textura cremosa y un sabor suave y mantecoso.",
      },
      {
        name: "Queso de Burgos",
        description:
          "Queso fresco de vaca, ligero y suave, ideal para combinar con miel o membrillo.",
      },
      {
        name: "Queso Roncal",
        description:
          "Queso de oveja con una maduración prolongada, de sabor fuerte y textura compacta.",
      },
      {
        name: "Queso Torta del Casar",
        description: "Queso extremeño de oveja, de pasta blanda y sabor intenso.",
      },
    ],
    note: "Servimos nuestros quesos a temperatura ambiente para apreciar todos sus matices. Consúltanos por nuestra tabla mixta de quesos con mermelada y nueces.",
  },
];
