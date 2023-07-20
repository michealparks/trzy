export const randomPointOnSphere = (radius: number): [x: number, y: number, z: number] => {
  const u = Math.random()
  const v = Math.random()

  // Azimuthal angle
  const theta = 2 * Math.PI * u

  // Polar angle
  const phi = Math.acos((2 * v) - 1)

  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  ]
}

export const randomPointWithinSphere = (radius: number): [x: number, y: number, z: number] => {
  const u = Math.random()
  const v = Math.random()
  const w = Math.random()

  // Azimuthal angle
  const theta = 2 * Math.PI * u

  // Polar angle
  const phi = Math.acos((2 * v) - 1)

  // Radius within the sphere
  const r = radius * Math.cbrt(w)

  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi),
  ]
}
