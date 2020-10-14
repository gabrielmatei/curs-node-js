const express = require('express')
const app = express()
const port = 3000

app.get('/hello-world', (req, res) => {
  res.send('hello world')
})

app.listen(port, _ => {
  console.log('server started')
})