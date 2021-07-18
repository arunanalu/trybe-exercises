const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// const seeResult = async () => {
//   const result = await getRepos('https://api.github.com/orgs/tryber/repos')
//   console.log(result)
// }

// seeResult();

module.exports = { getRepos }