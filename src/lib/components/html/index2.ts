import * as THREE from 'three'

const v1 = new THREE.Vector3()
const v2 = new THREE.Vector3()
const v3 = new THREE.Vector3()

const coords = new THREE.Vector2()

export const calculatePosition = (
  object: THREE.Object3D,
  camera: THREE.Camera,
  size: { width: number; height: number }
) => {
  const objectPos = v1.setFromMatrixPosition(object.matrixWorld)
  objectPos.project(camera)
  const widthHalf = size.width / 2
  const heightHalf = size.height / 2
  return [(objectPos.x * widthHalf) + widthHalf, -(objectPos.y * heightHalf) + heightHalf]
}

export const isObjectBehindCamera = (object: THREE.Object3D, camera: THREE.Camera) => {
  const objectPos = v1.setFromMatrixPosition(object.matrixWorld)
  const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld)
  const deltaCamObject = objectPos.sub(cameraPos)
  const camDirection = camera.getWorldDirection(v3)

  return deltaCamObject.angleTo(camDirection) > Math.PI / 2
}

export const isObjectVisible = (
  object: THREE.Object3D,
  camera: THREE.Camera,
  raycaster: THREE.Raycaster,
  occlude: THREE.Object3D[]
) => {
  const position = v1.setFromMatrixPosition(object.matrixWorld)
  position.project(camera)
  coords.set(position.x, position.y)
  raycaster.setFromCamera(coords, camera)

  const [intersect] = raycaster.intersectObjects(occlude, true)

  if (intersect !== undefined) {
    const intersectionDistance = intersect.distance
    const pointDistance = position.distanceTo(raycaster.ray.origin)
    return pointDistance < intersectionDistance
  }

  return true
}

