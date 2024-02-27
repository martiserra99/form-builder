import slugify from "slugify";

export function toSlug(string: string) {
  return slugify(string, { lower: true, strict: true, locale: "en" });
}

export function equalSlugs(a: string, b: string) {
  return toSlug(a) === toSlug(b);
}
