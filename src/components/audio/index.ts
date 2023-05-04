const audios: Record<string, HTMLAudioElement> = {}

export const preloadAudio = (src: string): HTMLAudioElement => {
  let audio = new Audio()
  audio.src = src
  audio.load()

  audios[src] = audio

  return audio
}

export const playAudio = (src: string, volume = 0.5, loop = false): HTMLAudioElement => {
  const audio = audios[src] ?? preloadAudio(src)
  audio.loop = loop
  audio.volume = volume
  audio.currentTime = 0
  audio.play()
  return audio
}
