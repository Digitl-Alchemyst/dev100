async function fetchAllData(endpoints) {
  // Your code here
  const promises = endpoints.map(endpoint => fetch(endpoint));
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map(response => response.json()));
  return data;
}


const endpoints = [
  'https://dummyjson.com/users',
  'https://dummyjson.com/products',
  'https://dummyjson.com/posts',
];

fetchAllData(endpoints)
  .then((results) => console.log(results))
  .catch((error) => console.error(error));