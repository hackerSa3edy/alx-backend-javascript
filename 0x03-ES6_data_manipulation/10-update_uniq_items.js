/**
 * Updates the quantities of unique items in a grocery map.
 * If an item's quantity is 1, it updates the quantity to 100.
 *
 * @param {Map<string, number>} groceryMap - A map where the keys are grocery item names and the values are their quantities.
 * @returns {Map<string, number>} The updated grocery map.
 * @throws {Error} If the input is not a Map.
 */
const updateUniqueItems = (groceryMap) => {
  if (!(groceryMap instanceof Map)) {
    throw Error('Cannot process');
  }

  for (const [key, value] of groceryMap.entries()) {
    if (value === 1) {
      groceryMap.set(key, 100);
    }
  }

  return groceryMap;
};

export default updateUniqueItems;
