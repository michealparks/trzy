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

  nextAction.loop = loop ? THREE.LoopRepeat : THREE.LoopOnce
  nextAction.clampWhenFinished = !loop

  nextAction
    .reset()
    .setEffectiveTimeScale(1)
    .setEffectiveWeight(1)
    .fadeIn(duration)
    .play()
}
