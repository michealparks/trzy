import * as THREE from 'three'

/**
 * Fades from one action to another.
 *
 * @param currentAction The currently playing action.
 * @param nextAction The action to fade to.
 * @param duration The fade duration.
 * @param loop Whether or not to loop the next action.
 */
export const fadeToAction = (
  currentAction: THREE.AnimationAction,
  nextAction: THREE.AnimationAction,
  duration: number,
  loop = true
): void => {
  if (currentAction !== nextAction) {
    currentAction.fadeOut(duration)
  }

  if (loop) {
    nextAction.loop = THREE.LoopRepeat
    nextAction.clampWhenFinished = false
  } else {
    nextAction.loop = THREE.LoopOnce
    nextAction.clampWhenFinished = true
  }

  nextAction
    .reset()
    .setEffectiveTimeScale(1)
    .setEffectiveWeight(1)
    .fadeIn(duration)
    .play()
}
