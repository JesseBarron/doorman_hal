export {};
const passport = require('passport');
const CustomStrategy = require('passport-custom')
const { User } = require('../models').models;

// passport.use(new LocalStrategy({}, async (username, password, done) => {

// }))
passport.serializeUser((user, done) => {
  done(null, {_id: user._id})
})

passport.deserializeUser((id, done) => {
  console.log("this is the id in the deserialized method")
  console.log(id)
  done(null, {user: 'jk'})
})

passport.use('local-general', new CustomStrategy( async (req, done) => {
  try {
    const user = await User.userLogin(req.body)

    if(!user) done("Wrong Password or Email")

    done(null, user)
  } catch (err) {
    done(err.message)
  }
}));

module.exports = passport