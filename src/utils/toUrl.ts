export const toURL = (value: string): string => {
  return (
    value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\/]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-(?!\/)|-$/g, '')
  );
}