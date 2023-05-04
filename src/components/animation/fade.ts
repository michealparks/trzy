import * as THREE from 'three'

export const fadeToAction = (
  lastAction: THREE.AnimationAction,
  nextAction: THREE.AnimationAction,
  duration: number,
  loop = true
): THREE.AnimationAction => {
  if (lastAction !== nextAction) {
    lastAction.fadeOut(duration)
  }

  if (loop) {
    nextAction.loop = THREE.LoopRepeat
    nextAction.clampWhenFinished = false
  } else {
    nextAction.loop = THREE.LoopOnce
    nextAction.clampWhenFinished = true
  }

  return nextAction
    .reset()
    .setEffectiveTimeScale(1)
    .setEffectiveWeight(1)
    .fadeIn(duration)
    .play()
}
