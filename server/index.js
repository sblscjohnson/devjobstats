require('dotenv').config()
const { SERVER_PORT, DB_CONNECTION } = process.env
const port = SERVER_PORT || 3005

const express = require('express')
const app = express()
const { json } = require('express')

const massive = require('massive')

app.use(json())



massive(DB_CONNECTION)
.then(db => {
  app.set('db', db)
  app.listen(port, () => console.log(`launching on port ${ port }`))
})