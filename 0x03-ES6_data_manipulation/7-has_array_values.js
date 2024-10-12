/**
 * Checks if all elements in an array are present in a set.
 *
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of elements to check.
 * @returns {boolean} True if all elements in the array are present in the set, otherwise false.
 */
const hasValuesFromArray = (set, array) => array.every((element) => set.has(element));

export default hasValuesFromArray;
