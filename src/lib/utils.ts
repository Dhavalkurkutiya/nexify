import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDate, formatDistanceToNowStrict } from "date-fns"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatRelativeDate(from: Date) {
  const currenDate = new Date();

  if (currenDate.getTime() - from.getTime() < 24 * 60 * 60 * 1000) {
    return formatDistanceToNowStrict(from, { addSuffix: true })
  } else {
    if (currenDate.getFullYear() === from.getFullYear()) {
      return formatDate(from, "MMM d")
    } else {
      return formatDate(from, "MMM d, yyy")
    }
  }
}