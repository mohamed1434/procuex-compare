import {type ClassValue, clsx} from "clsx"
import { twMerge } from "tailwind-merge";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 because months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}