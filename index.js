const express = require('express')
const Furminator = require('./Furminator')
const hackNSA = require('./MrRobot')

const app = express()
const port = 3000

app.get('/cat-fact', async (req, res) => {
  const furminator = new Furminator()
  const body = furminator.getFact()
  furminator.factCount = 4
  console.log(furminator.factCount)
  body.then((body) => {
    res.send(body.text)
  })
})

app.get('/hack', async (req, res) => {
  const furminator = new Furminator()

  const { password } = await hackNSA()
  const { text } = await furminator.getFact()

  res.send({
    password,
    text
  })
})

app.listen(port, _ => {
  console.log('server started')
})