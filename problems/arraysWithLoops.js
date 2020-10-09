/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {array} - ["I", "am", "a", "happy", "array"]
 * @returns {array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop() {}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {array} - ["I", "am", "a", "happy", "array"]
 * @return {array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop() {}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {array} - ["I", "am", "a", "happy", "array"]
 * @returns {array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop() {}

/**
 * Takes in an array and returns the sum of all values
 * @param {array} nums
 * @returns {number} sum
 */

function sumArray() {}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {array} nums
 * @returns {array} odds
 */

function oddArray() {}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {array} nums
 * @returns {array} evens
 */

function evenArray() {}

/**
 * Takes in array and returns the smallest number in the array
 * @param {array} nums
 * @returns {number} smallest value
 */

function findSmallest() {}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {array} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest() {}

/**
 * Takes in array and returns the second largest number in the array
 * @param {array} nums
 * @returns {number} second largest value
 */

function findSecondLargest() {}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {array} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups() {}

module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
};
