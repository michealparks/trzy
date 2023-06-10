export const randomPointOnSphere = (radius: number): [number, number, number] => {
  const u = Math.random()
  const v = Math.random()

  // Azimuthal angle
  const theta = 2 * Math.PI * u

  // Polar angle
  const phi = Math.acos((2 * v) - 1)

  const x = radius * Math.sin(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi) * Math.sin(theta)
  const z = radius * Math.cos(phi)

  return [x, y, z]
}

export const randomPointWithinSphere = (radius: number): [number, number, number] => {
  const u = Math.random()
  const v = Math.random()
  const w = Math.random()

  // Azimuthal angle
  const theta = 2 * Math.PI * u

  // Polar angle
  const phi = Math.acos((2 * v) - 1)

  // Radius within the sphere
  const r = radius * Math.cbrt(w)

  const x = r * Math.sin(phi) * Math.cos(theta)
  const y = r * Math.sin(phi) * Math.sin(theta)
  const z = r * Math.cos(phi)

  return [x, y, z]
}
