/**
 * A timer utility that provides remaining time, can be started, and calls a callback on expiration.
 */
export class Timer {
  initialDurationMs: number;
  onExpireCallback: () => void;
  startTime: number | null;
  timerId: null | NodeJS.Timeout;
  remainingTimeMs: number;
  isExpired: boolean;

  constructor(initialDurationMs: number, onExpireCallback: () => void) {
    if (initialDurationMs <= 0) {
      throw new Error(
        'Initial duration must be a positive number of milliseconds.',
      );
    }
    if (typeof onExpireCallback !== 'function') {
      throw new Error('onExpireCallback must be a function.');
    }

    this.initialDurationMs = initialDurationMs;
    this.onExpireCallback = onExpireCallback;
    this.startTime = null;
    this.timerId = null;
    this.remainingTimeMs = initialDurationMs;
    this.isExpired = false;
  }

  /**
   * Formats time in milliseconds into H:MM format.
   * @param ms - Time in milliseconds.
   * @returns Formatted time string (e.g., "1:30", "0:45").
   */
  formatTime(ms: number) {
    if (ms < 0) ms = 0; // Ensure no negative display
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(totalSeconds % 60).padStart(2, '0');

    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  }

  /**
   * Starts the timer. If the timer is already running, it does nothing.
   */
  start() {
    console.log(this.timerId, this.isExpired);
    if (this.timerId !== null || this.isExpired) {
      return;
    }

    this.startTime =
      Date.now() - (this.initialDurationMs - this.remainingTimeMs); // Adjust start time if resuming
    this.timerId = setInterval(() => {
      const now = Date.now();
      this.remainingTimeMs =
        this.initialDurationMs - (now - (this.startTime as number));

      if (this.remainingTimeMs <= 0) {
        this.remainingTimeMs = 0;
        this.stop();
        this.isExpired = true;
        this.onExpireCallback();
      }
    }, 1000); // Update every second
  }

  /**
   * Stops the timer.
   */
  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  /**
   * Resets the timer to its initial duration and stops it.
   */
  reset() {
    this.stop();
    this.remainingTimeMs = this.initialDurationMs;
    this.startTime = null;
    this.isExpired = false;
  }

  /**
   * Gets the remaining time in H:MM format.
   * @returns Formatted remaining time.
   */
  getFormattedRemainingTime() {
    return this.formatTime(this.remainingTimeMs);
  }

  /**
   * Gets the remaining time in milliseconds.
   * @returns Remaining time in milliseconds.
   */
  getRemainingTimeMs() {
    return this.remainingTimeMs;
  }

  /**
   * Checks if the timer has expired.
   * @returns True if expired, false otherwise.
   */
  getIsExpired() {
    return this.isExpired;
  }

  /**
   * Gets the current status of the timer.
   * @returns
   */
  getStatus() {
    if (this.isExpired) return 'expired';
    if (this.timerId !== null) return 'running';
    return 'stopped';
  }
}
