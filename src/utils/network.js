export const fetchUrl = (url, params) => fetch(url, params)
  .then(res => res.json())
  .then(data => data)
  .catch(err => err);
