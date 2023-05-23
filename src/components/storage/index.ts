export const save = (key: string, value: unknown) => {
  return localStorage.setItem(key, JSON.stringify(value))
}

export const load = <T = unknown>(key: string): T | null => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? 'null')
  } catch {
    return null
  }
}

export const remove = (key: string) => {
  return localStorage.removeItem(key)
}
