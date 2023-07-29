
interface PerformanceMonitorHookApi {
  onIncline: (api: PerformanceMonitorApi) => void
  onDecline: (api: PerformanceMonitorApi) => void
  onChange: (api: PerformanceMonitorApi) => void
  onFallback: (api: PerformanceMonitorApi) => void
}

export interface PerformanceMonitorApi {
  /** Current fps */
  fps: number
  /** Current performance factor, between 0 and 1 */
  factor: number
  /** Current highest fps, you can use this to determine device refresh rate */
  refreshrate: number
  /** Fps samples taken over time  */
  frames: number[]
  /** Averages of frames taken over n iterations   */
  averages: number[]
  index: number
  flipped: number
  fallback: boolean
  subscriptions: Map<symbol, Partial<PerformanceMonitorHookApi>>
  subscribe: () => void
}

interface PerformanceMonitorProps {
  /** How much time in milliseconds to collect an average fps, 250 */
  ms?: number
  /** How many interations of averages to collect, 10 */
  iterations?: number
  /** The percentage of iterations that are matched against the lower and upper bounds, 0.75 */
  threshold?: number
  /**
   * A function that receive the max device refreshrate to determine lower and upper bounds which
   * create a margin where neither incline nor decline should happen, (refreshrate) => (refreshrate > 90 ? [50, 90] : [50, 60])
   */
  bounds?: (refreshrate: number) => [lower: number, upper: number]
  /** How many times it can inline or decline before onFallback is called, Infinity */
  flipflops?: number
  /** The factor increases and decreases between 0-1, this prop sets the starting value, 0.5 */
  factor?: number
  /** The step that gets added or subtracted to or from the factor on each incline/decline, 0.1 */
  step?: number
  /** When performance is higher than the upper bound (good!) */
  onIncline?: (api: PerformanceMonitorApi) => void
  /** When performance is lower than the upper bound (bad!) */
  onDecline?: (api: PerformanceMonitorApi) => void
  /** Incline and decline will change the factor, this will trigger when that happened */
  onChange?: (api: PerformanceMonitorApi) => void
  /** Called after when the number of flipflops is reached, it indicates instability, use the function to set a fixed baseline */
  onFallback?: (api: PerformanceMonitorApi) => void
}

const decimalPlacesRatio = 10 ** 0

export class PerformanceMonitor {
  iterations = 10
  ms = 250
  threshold = 0.75
  step = 0.1

  flipflops = Number.POSITIVE_INFINITY

  // Api
  fps = 0
  index = 0
  factor = 0.5
  lastFactor = 0
  flipped = 0
  refreshrate = 0
  fallback = false
  frames: number[] = []
  averages: number[] = []
  subscriptions = new Map()
  subscribe = (callback: () => void) => {
    const key = Symbol()
    this.subscriptions.set(key, callback)
    return () => {
      this.subscriptions.delete(key)
    }
  }
  bounds: (n: number) => [number, number]
  onIncline: any
  onDecline: any
  onChange: any
  onFallback: any

  constructor ({
    iterations = 10,
    ms = 250,
    threshold = 0.75,
    step = 0.1,
    factor = 0.5,
    flipflops = Number.POSITIVE_INFINITY,
    bounds = (refreshrate) => (refreshrate > 100 ? [60, 100] : [40, 60]),
    onIncline,
    onDecline,
    onChange,
    onFallback,
  }: PerformanceMonitorProps) {
    this.iterations = iterations
    this.ms = ms
    this.threshold = threshold
    this.step = step
    this.factor = factor
    this.flipflops = flipflops
    this.bounds = bounds
    this.onIncline = onIncline
    this.onDecline = onDecline
    this.onChange = onChange
    this.onFallback = onFallback
  }

  update (): void {
    const { frames, averages, fallback } = this

    // If the fallback has been reached do not continue running samples
    if (fallback) {
      return
    }

    if (averages.length >= this.iterations) {
      return
    }

    frames.push(performance.now())
    const msPassed = frames.at(-1)! - frames[0]!

    if (msPassed < this.ms) {
      return
    }

    this.fps = Math.round((frames.length / msPassed) * 1000 * decimalPlacesRatio) / decimalPlacesRatio
    this.refreshrate = Math.max(this.refreshrate, this.fps)
    averages[this.index++ % this.iterations] = this.fps

    if (averages.length === this.iterations) {
      const [lower, upper] = this.bounds(this.refreshrate)
      const upperBounds = averages.filter((value) => value >= upper)
      const lowerBounds = averages.filter((value) => value < lower)

      // Trigger incline when more than -threshold- avgs exceed the upper bound
      if (upperBounds.length > this.iterations * this.threshold) {
        this.factor = Math.min(1, this.factor + this.step)
        this.flipped++
        if (this.onIncline) { this.onIncline(this) }
        this.subscriptions.forEach((value) => value.onIncline && value.onIncline(this))
      }

      // Trigger decline when more than -threshold- avgs are below the lower bound
      if (lowerBounds.length > this.iterations * this.threshold) {
        this.factor = Math.max(0, this.factor - this.step)
        this.flipped++
        this.onDecline?.(this)
        this.subscriptions.forEach((value) => value.onDecline && value.onDecline(this))
      }

      if (this.lastFactor !== this.factor) {
        this.lastFactor = this.factor
        this.onChange?.(this)
        this.subscriptions.forEach((value) => value.onChange && value.onChange(this))
      }

      if (this.flipped > this.flipflops && !this.fallback) {
        this.fallback = true
        this.onFallback?.(this)
        this.subscriptions.forEach((value) => value.onFallback && value.onFallback(this))
      }

      this.averages = []

      /*
       * Resetting the refreshrate creates more problems than it solves atm
       * api.refreshrate = 0
       */
    }

    this.frames = []
  }
}
