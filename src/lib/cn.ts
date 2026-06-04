type ClassValue = string | number | false | null | undefined | 0n;

export function cn(...classes: ClassValue[]) {
  return classes.filter((c): c is string => typeof c === "string" && c.length > 0).join(" ");
}
