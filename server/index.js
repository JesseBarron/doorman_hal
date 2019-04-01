require('dotenv').config()
const express = require('express')
const session = require('express-session')

const bodyParser = require('body-parser')
const logger = require('morgan')
const passport = require('./common/passport.config')
const { db, sessionStore } = require('./models')

const app = express()
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(passport.initialize())


app.use(session({
  store: sessionStore,
  secret: 'SHHHHH',
  resave: true,
  saveUninitialized: true
}));

app.post('/test', passport.authenticate('local-general'), (req, res, next) => {
  res.send("OK")
})

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})
  

// * TODOS
  // Write a quick little seed script to populate the database
  // push this to aws, seed the db 
  // Connect to the aws instance of the db in the python app and fetch sessions
