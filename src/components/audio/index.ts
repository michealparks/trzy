const audios: Record<string, HTMLAudioElement> = {}

export const preloadAudio = (src: string) => {
  let audio = new Audio()
  audio.src = src
  audio.load()

  audios[src] = audio
}

export const playAudio = (src: string, volume = 0.5) => {
  let audio = audios[src]

  if (audio === undefined) {
    audio = new Audio()
    audio.src = src
    audio.load()
    
    audios[src] = audio
  }

  audio.volume = volume
  audio.currentTime = 0
  audio.play()
  return audio
}
