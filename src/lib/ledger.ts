// Formatting helpers shared by the ledger blog surface.

const pad = (n: number) => String(n).padStart(2, "0");

// Fixed rather than locale-derived, so the gutter stays three characters wide.
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "Jul 03" — the index date gutter. */
export const monthDay = (d: Date) =>
  `${MONTHS[d.getMonth()]} ${pad(d.getDate())}`;

/** "Jul 03, 2026" — the post header bar. */
export const shortDate = (d: Date) => `${monthDay(d)}, ${d.getFullYear()}`;

/** The right-hand category column, derived from a post's eyebrow. */
export const tagOf = (eyebrow?: string) =>
  eyebrow?.replace(/^on\s+/i, "").trim() || "notes";
