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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  console.log(error);
}
