const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000

const models = require('./models')

const config = {
  secretKey: 'SuperSecretKey'
}

app.use(express.json())

const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res
      .status(401)
      .send({
        status: 'not ok'
      })
  }
  const jwtToken = authorization.replace('Bearer ', '')
  jwt.verify(jwtToken, config.secretKey, (err, decoded) => {
    if (err) {
      res
        .status(401)
        .send({
          status: 'not ok'
        })
    } else {
      next()
    }
  })
}

app.post('/login', (req, res) => {
  const { user, pass } = req.body
  if (user === 'gogu' && pass === '123456') {
    jwt.sign({}, config.secretKey, (err, token) => {
      res.send({
        token
      })
    })
  } else {
    res
      .status(401)
      .send({
        status: 'not ok'
      })
  }
})

app.post('/graphql', authorizationMiddleware, (req, res) => {
  res.send({
    status: 'ok'
  })
})

app.post('/graphql/public', (req, res) => {
  res.send({
    status: 'ok'
  })
})

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id
  const { firstName, lastName, email} = await models.User.findByPk(userId)
  res.send({
    firstName,
    lastName,
    email
  })
})

app.listen(port, _ => {
  console.log('server started')
})