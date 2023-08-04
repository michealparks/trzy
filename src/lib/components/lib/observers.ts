export const resizeObserver = (target: HTMLElement, callback: (rect: DOMRectReadOnly) => void) => {
  const observer = new ResizeObserver(([entry]) => {
    callback(entry!.contentRect)
  })
  observer.observe(target)
  return observer
}
