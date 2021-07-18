const fetch = require('node-fetch');

const fetchApi = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json();
    console.log(data)
    return data;
  } catch (erro) {
    return erro
  }
}

// fetchApi();

module.exports = fetchApi;