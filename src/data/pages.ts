import { colors } from "./colors";

interface PageData {
  order: string[]; // slugs de colors, en el orden en que se muestran
  padding: string; // clase completa de Tailwind
}

const pagesData: PageData[] = [
  { order: ["blue", "red", "green", "yellow"], padding: "p-4" },
  { order: ["green", "blue", "yellow", "red"], padding: "p-5" },
  { order: ["yellow", "green", "red", "blue"], padding: "p-6" },
  { order: ["red", "yellow", "blue", "green"], padding: "p-7" },
];

// Convierte los slugs en objetos Color para no repetir nombre y clase
export const pages = pagesData.map(({ order, padding }, i) => ({
  number: i + 1,
  padding,
  colors: order.map((slug) => colors.find((c) => c.slug === slug)!),
}));
