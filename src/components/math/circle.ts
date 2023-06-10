export const randomPointOnCircle = (radius: number): [number, number] => {
  const theta = 2 * Math.PI * Math.random()

  const x = radius * Math.cos(theta)
  const y = radius * Math.sin(theta)

  return [x, y]
}

export const randomPointWithinCircle = (radius: number): [number, number] => {
  const r = radius * Math.sqrt(Math.random())

  const theta = 2 * Math.PI * Math.random()

  const x = r * Math.cos(theta)
  const y = r * Math.sin(theta)

  return [x, y]
}
