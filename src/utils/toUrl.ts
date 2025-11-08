export const toURL = (value?: string): string =>
  value
    ? value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\/]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-(?!\/)|-$/g, "")
    : "";
