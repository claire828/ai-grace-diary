const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Pad single digit numbers with leading zero
function pad(n: number): string {
  return n.toString().padStart(2, '0')
}

/**
 * Convert a backend UTC timestamp to a local Date object
 * @param timestamp Backend UTC string, e.g. "2025-09-10 11:16:42.461291"
 * @returns Date object in local time
 */
export function toLocalDate(timestamp: string): Date {
  // If the string already contains 'T' or ends with 'Z', treat it as ISO/UTC and use new Date directly
  if (timestamp.includes('T') || timestamp.endsWith('Z')) {
    return new Date(timestamp)
  }
  // Otherwise, append 'Z' to treat as UTC
  return new Date(timestamp + 'Z')
}

/**
 * Format a UTC timestamp to European style: DD MMM YYYY HH:mm
 * @param timestamp Backend UTC string
 * @returns Formatted date string in local time
 */
export function formatEuropean(timestamp: string): string {
  const date = toLocalDate(timestamp)

  const day = pad(date.getDate())
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())
  return `${day} ${month} ${year} ${hours}:${minutes}`
}

/**
 * Format a UTC timestamp to ISO/technical style: YYYY-MM-DD HH:mm
 * @param timestamp Backend UTC string
 * @returns Formatted date string in local time
 */
export function formatISO(timestamp: string): string {
  const date = toLocalDate(timestamp)

  const year = date.getFullYear()
  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())

  return `${year}-${month}-${day} ${hours}:${minutes}`
}
