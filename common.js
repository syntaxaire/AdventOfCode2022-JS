/**
 * Return the maximum value in an array of numbers
 * @param {Array.<number>} array the array to find the max value in
 * @returns {number}
 */
export function max(array) {
  if (array.length === 0) {
    throw new Error('Array has zero length so cannot have a max value');
  }
  let largest = array[0];
  if (array.length > 1) {
    for (let i = 1; i < array.length; i += 1) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
  }
  return largest;
}

/**
 * Remove the first occurrence of a value from the given array object
 * @param {Array} array the array to remove the value from
 * @param {*} val the value to remove
 */
export function removeFrom(array, val) {
  const index = array.indexOf(val);
  if (index === -1) {
    throw new Error('Value to remove not found in array');
  }
  array.splice(index, 1);
}

/**
 * Return the sum of an array of numbers
 * @param {Array.<number>} array the array to sum
 * @returns {number}
 */
export function sum(array) {
  return array.reduce((runningSum, val) => runningSum + val, 0);
}
