/**
 * A WeakMap to store the number of times an endpoint is queried.
 * The keys are endpoint objects, and the values are the number of queries.
 */
export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and tracks the number of times each endpoint is queried.
 * If an endpoint is queried more than 4 times, an error is thrown.
 *
 * @param {Object} endpoint - The endpoint object to be queried.
 * @throws {Error} If the endpoint is queried more than 4 times.
 */
export const queryAPI = (endpoint) => {
  const endpointNumbers = weakMap.get(endpoint) || 0;
  if (endpointNumbers >= 4) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, endpointNumbers + 1);
};
