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

app.get('/api/test', passport.authenticate('local-general'), (req, res, next) => {
  res.send("OK")
})

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})
  
// TODOS
 // Time to build out the UI
  // Start with the login/Authorization then move on with the dash

  // Dash
    // I think it would be cool to add some metrics here, on how many times the camera senses motion and snaps a shot
    // Add A gallery section where you can view the snapshots and sort them by time.
    // Add a record function, this function should allow the user to save a recording of a webcam for a number oh hours
    // SuperAdmin: Add a section for notifications?

  // Login
    // Idk what to do with this really, just make it look nice....
    // Have an animated butler robot? Idk have fun with this!
  //