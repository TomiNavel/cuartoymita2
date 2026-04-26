export type NavItem = {
  readonly href: `/${string}` | "/";
  readonly label: string;
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/cuartoymita", label: "Cuarto y Mitá" },
] satisfies ReadonlyArray<NavItem>;
