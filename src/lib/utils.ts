type ClassValue = string | number | null | false | undefined;

/**
 * Lightweight className combiner, joins truthy values with a space.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Smoothly scrolls to an element by id (client-side only).
 */
export function scrollToId(id: string): void {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
