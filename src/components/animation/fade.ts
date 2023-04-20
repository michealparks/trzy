import { type AnimationAction, LoopRepeat, LoopOnce } from 'three'

export const fadeToAction = (
  lastAction: AnimationAction,
  nextAction: AnimationAction,
  duration: number,
  loop = true
) => {
  if (lastAction !== nextAction) {
    lastAction.fadeOut(duration)
  }

  if (loop) {
    nextAction.loop = LoopRepeat
    nextAction.clampWhenFinished = false
  } else {
    nextAction.loop = LoopOnce
    nextAction.clampWhenFinished = true
  }

  return nextAction
    .reset()
    .setEffectiveTimeScale(1)
    .setEffectiveWeight(1)
    .fadeIn(duration)
    .play()
}
