const express = require('express')
const { catFact } = require('./api')

const app = express()
const port = 3000

app.get('/cat-fact', (req, res) => {
  catFact()
    .then((body) => {
      const { text } = body
      res.send(text)
    })
})

app.listen(port, _ => {
  console.log('server started')
})