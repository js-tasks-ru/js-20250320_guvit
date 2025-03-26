/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortArr = [...arr];

  sortArr.sort((a, b) => {
    const sortParam = {
      caseFirst: 'upper',
      locales: ['ru', 'en']
    };

    return param === 'asc'
      ? a.localeCompare(b, sortParam.locales, { caseFirst: sortParam.caseFirst })
      : b.localeCompare(a, sortParam.locales, { caseFirst: sortParam.caseFirst });
  });

  return sortArr;
}
