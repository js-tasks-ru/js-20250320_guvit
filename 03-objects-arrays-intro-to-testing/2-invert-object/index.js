/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }
  const resValKey = {};
  for (const [key, value] of Object.entries(obj)) {
    resValKey[String(value)] = key;
  }
  return resValKey;
}
