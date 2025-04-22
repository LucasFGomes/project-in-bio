import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeLink(link?: string) {
  if (!link) return "";

  return link
    .replace(/\s/g, "")
    .replace(/[^a-z0-9-]/gi, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLocaleLowerCase();
}