import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setStorageItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorageItem(key: string) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
