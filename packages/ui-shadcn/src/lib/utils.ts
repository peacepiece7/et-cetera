import { type ClassValue, clsx } from 'clsx';
import { twMerge } from '@repo/config-tailwind/node_modules/tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
