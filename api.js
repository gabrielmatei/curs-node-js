const fetch = require('node-fetch')

const catFact = _ => {
  const url = 'https://cat-fact.herokuapp.com/facts/random'
  return fetch(url)
    .then(res => res.json())
}

module.exports = {
  catFact
}