/**
 * Creates an Int8 typed array and sets a value at a specific position.
 *
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position in the ArrayBuffer where the value should be set.
 * @param {number} value - The value to set at the specified position.
 * @returns {DataView} A DataView object representing the typed array.
 * @throws {Error} If the position is outside the range of the ArrayBuffer.
 */
const createInt8TypedArray = (length, position, value) => {
  if (position >= length) {
    throw Error('Position outside range');
  }

  const dataView = new DataView(new ArrayBuffer(length));
  dataView.setInt8(position, value);

  return dataView;
};

export default createInt8TypedArray;
