/* eslint-disable */
export const guid = () => 'Uxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});
/* eslint-enable */

export const sortAsc = (a, b) => {
  const lastNameA = a.lastName.toUpperCase();
  const lastNameB = b.lastName.toUpperCase();
  let comparison = 0;
  if (lastNameA > lastNameB) {
    comparison = 1;
  } else if (lastNameA < lastNameB) {
    comparison = -1;
  }
  return comparison;
};

export const sortDesc = (b, a) => {
  const lastNameA = a.lastName.toUpperCase();
  const lastNameB = b.lastName.toUpperCase();
  let comparison = 0;
  if (lastNameA > lastNameB) {
    comparison = 1;
  } else if (lastNameA < lastNameB) {
    comparison = -1;
  }
  return comparison;
};
