/**
 * @description - Scheudles `func` to run every `frequencyInMs` milliseconds
 * @param {Function} func - The function to run
 * @param {Number} frequencyInMs - The number of milliseconds between calls
 */
module.exports = (func, frequencyInMs) => {
  let running = false

  /**
   * @description - Runs the function and schedules another run upon
   *   completion
   */
  function tick() {
    return Promise.resolve(func()).then(() => {
      if (running) {
        setTimeout(tick, frequencyInMs)
      }

      return null
    })
  }

  /**
   * @description - Starts the periodic thing
   */
  function start() {
    if (!running) {
      running = true

      tick()
    }

    return null
  }

  /**
   * @description - Stops the periodic thing
   */
  function stop() {
    running = false
  }

  return { start, stop }
}
