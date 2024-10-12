/**
 * Creates and returns a map of grocery items with their quantities.
 *
 * @returns {Map<string, number>} A map where the keys are grocery item names
 *  and the values are their quantities.
 */
const groceriesList = () => {
  const groceryMap = new Map();

  groceryMap.set('Apples', 10);
  groceryMap.set('Tomatoes', 10);
  groceryMap.set('Pasta', 1);
  groceryMap.set('Rice', 1);
  groceryMap.set('Banana', 5);

  return groceryMap;
};

export default groceriesList;
