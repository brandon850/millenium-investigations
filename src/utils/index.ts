export const createPageUrl = (page) => {
  if (!page) return "/";

  // Home should always be "/"
  if (page.toLowerCase() === "home") return "/";

  // Convert PascalCase or camelCase to kebab-case
  const slug = page
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return `/${slug}`;
};
