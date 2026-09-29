export interface Color {
  name: string;
  slug: string;
  bg: string;
}

// Las clases de Tailwind van completas para que Tailwind las detecte al compilar
export const colors: Color[] = [
  { name: "Blue", slug: "blue", bg: "bg-blue-500" },
  { name: "Red", slug: "red", bg: "bg-red-500" },
  { name: "Green", slug: "green", bg: "bg-green-500" },
  { name: "Yellow", slug: "yellow", bg: "bg-yellow-500" },
];
