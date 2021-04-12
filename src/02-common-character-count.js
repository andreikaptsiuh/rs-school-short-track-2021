/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = Array.from(s1);
  const arr2 = Array.from(s2);
  const set = Array.from(new Set(s1));

  let result = 0;

  for (let i = 0; i < set.length; i++) {
    const len1 = arr1.filter((item) => item === set[i]).length;
    const len2 = arr2.filter((item) => item === set[i]).length;
    if (len1 > len2) result += len2;
    else result += len1;
  }

  return result;
}

module.exports = getCommonCharacterCount;
