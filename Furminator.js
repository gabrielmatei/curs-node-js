const fetch = require('node-fetch')

class Furminator {
  constructor() {
    this.url = 'https://cat-fact.herokuapp.com/facts/random'
    this._factCount=null
  }

  getFact() {
    return fetch(this.url)
      .then(res => {
        return res.json()
      })
      .then(body => {
        return body
      })
  }

  set factCount(numberOfFacts) {
    this._factCount = `${numberOfFacts} Facts`
  }

  get factCount() {
    return this._factCount
  }
}

module.exports = Furminator