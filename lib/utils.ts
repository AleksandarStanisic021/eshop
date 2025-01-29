import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainOblect<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumber(num: number): string {
  const [int, dec] = num.toString().split(".");
  return dec ? `${int}.${dec.padEnd(2, "0")}` : `${int}.00`;
}
