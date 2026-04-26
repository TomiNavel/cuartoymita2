export type Testimonial = {
  readonly text: string;
  readonly author: string;
  readonly via: string;
  readonly avatar: `/${string}`;
};

export const testimonials = [
  {
    text: "Venimos de vacaciones desde Badajoz, preocupados por los desayunos. Este sitio ha estado muy por encima de las expectativas. La comida es excelente, el lugar es muy agradable. Pero aún más por encima de todo eso, la atención, la amabilidad y el cariño con el que nos han atendido Marta y María nos ha hecho repetir desayuno tras desayuno.",
    author: "Ainara Robles",
    via: "Google Reviews",
    avatar: "/img-avatar1.jpg",
  },
  {
    text: "Es un lugar pequeñín pero muy acogedor. Tienen un café muy bueno, así como los pinchos y los dulces que tienen, bollería y bizcochos caseros. El de limón está de muerte. Tienen tienda: venden pan y algo de charcutería. El trato es magnífico.",
    author: "Ángeles Fernández",
    via: "Google Reviews",
    avatar: "/img-avatar2.jpg",
  },
  {
    text: "Probablemente la mejor variedad de quesos en Asturias. Gran selección de quesos, vinos y cervezas. Es un lugar para pasar un buen rato y disfrutar con la familia, con los amigos o solo con el perro.",
    author: "Eduardo Santos",
    via: "Google Reviews",
    avatar: "/img-avatar3.jpg",
  },
] satisfies ReadonlyArray<Testimonial>;
