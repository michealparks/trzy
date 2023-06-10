
import type { Meta, StoryObj } from '@storybook/html'
import { three, useGamepad } from '../../main'
import code from './code?raw'

const meta: Meta = {
  title: 'Gamepad',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  const { update } = three()

  const container = document.createElement('div')
  container.style.display = 'flex'

  const pre = document.createElement('pre')
  const pre2 = document.createElement('pre')
  pre.style.width = '400px'
  container.append(pre, pre2)

  const { gamepad1, gamepad2, updateGamepads } = useGamepad()

  update(() => {
    updateGamepads()
    pre.innerHTML = `Gamepad 1\n\n${JSON.stringify(gamepad1, undefined, 2)}`
    pre2.innerHTML = `Gamepad 2\n\n${JSON.stringify(gamepad2, undefined, 2)}`
  })

  return container
}

export const Primary: StoryObj = { render }