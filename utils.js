/**
 * Calls func only if the delay from its last call has passed
 * @param {function} func
 * @param {number} delay
 * @returns a function that will be called on a new event so that the older timeout will be cleared
 */
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    // clear previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // create a new timeout
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
