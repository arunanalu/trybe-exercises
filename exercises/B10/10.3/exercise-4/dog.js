const fetch = require('node-fetch');

const fetchApi = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((result) => {
        result.status === 'success' ? Promise.resolve(result) : Promise.reject('erro')
    })
}

// fetchApi();

module.exports = { fetchApi }