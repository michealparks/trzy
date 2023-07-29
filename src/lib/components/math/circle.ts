export const randomPointOnCircle = (radius: number): [x: number, y: number] => {
  const theta = 2 * Math.PI * Math.random()
  return [radius * Math.cos(theta), radius * Math.sin(theta)]
}

export const randomPointWithinCircle = (radius: number): [x: number, y: number] => {
  const r = radius * Math.sqrt(Math.random())
  const theta = 2 * Math.PI * Math.random()
  return [r * Math.cos(theta), r * Math.sin(theta)]
}
