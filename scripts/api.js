"use strict"

const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const app = express()

var ITEMS = []

app.set('env', process.env.NODE_ENV || 'dev')

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT")
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})

app.get('/1/items', (req, res, next) => {
  res.json({ result: ITEMS })
})

app.post('/1/items', (req, res, next) => {
  let item = req.body
  item.id = ITEMS.length + 1
  ITEMS.push(item)
  return res.json({ success: true })
})

app.delete('/1/items/:id', (req, res, next) => {
  ITEMS = ITEMS.filter(item => item.id != req.param('id'))
  return res.json({ success: true })
})

app.use(compression())

let server = app.listen(3001, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('API Server at http://%s:%s (env = %s)', host, port, app.get('env'))
})
