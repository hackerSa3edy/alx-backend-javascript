/**
 * Filters and cleans a set of strings by removing a specified prefix and
 *  joining the results.
 *
 * @param {Set} set - The set of strings to be cleaned.
 * @param {string} startString - The prefix to be removed from each string.
 * @returns {string} A string of cleaned elements joined by a hyphen. If the
 *  prefix is empty or not a string, returns an empty string.
 */
const cleanSet = (set, startString) => {
  const stringWithNoPrefix = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  set.forEach((string) => {
    if (typeof string === 'string' && string.startsWith(startString)) {
      stringWithNoPrefix.push(string.substring(startString.length));
    }
  });

  return stringWithNoPrefix.join('-');
};

export default cleanSet;
