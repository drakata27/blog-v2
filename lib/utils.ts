import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function calculateReadTime(content: string) {
  // Split content into words and count them
  const wordCount = content.split(/\s+/).length;
  // Calculate the number of minutes, rounding up for any remaining words
  const readingTime = Math.ceil(wordCount / 238);
  return readingTime;
}
