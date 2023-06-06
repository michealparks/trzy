export const darkenColor = (hexColor: string, percentage: number) => {
  if (percentage === 0) {
    return hexColor
  }

  const color = hexColor.replace('#', '')

  let red = Number.parseInt(color.slice(0, 2), 16)
  let green = Number.parseInt(color.slice(2, 4), 16)
  let blue = Number.parseInt(color.slice(4, 6), 16)

  red = Math.round(red * (1 - (percentage / 100)))
  green = Math.round(green * (1 - (percentage / 100)))
  blue = Math.round(blue * (1 - (percentage / 100)))

  red = (red < 0 ? 0 : (red > 255 ? 255 : red))
  green = (green < 0 ? 0 : (green > 255 ? 255 : green))
  blue = (blue < 0 ? 0 : (blue > 255 ? 255 : blue))

  const r = `${red < 16 ? '0' : ''}${red.toString(16)}`
  const g = `${green < 16 ? '0' : ''}${green.toString(16)}`
  const b = `${blue < 16 ? '0' : ''}${blue.toString(16)}`

  return `#${r}${g}${b}`
}
