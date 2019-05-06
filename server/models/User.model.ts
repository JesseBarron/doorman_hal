export {};
const mongoose = require('mongoose')
const argon2 = require('argon2')

const userSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date
  },
  permissions: {
    type: String,
    enum: ['Admin', 'User', 'SuperAdmin'],
    required: true,
    default: 'User'
  },
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

userSchema.pre('save', async function(next) {
  try {
    this.password = await argon2.hash(this.password)
    next()
  } catch (err) {
    console.log(err)
  }
})

userSchema.statics.userLogin = async function(userInfo) {
  const { email, password: unverifiedPW } = userInfo

  if(!email) throw new Error("User must provide an email")
  if(!unverifiedPW) throw new Error("User must provide an password")

  const foundUser = await this.findOne({ email });

  if(!foundUser) throw new Error("User Not Found");

  const isVerified = foundUser ? await argon2.verify(foundUser.password, unverifiedPW) : null;
  if(isVerified) return foundUser
  
  return null
}


const User = mongoose.model("User", userSchema)

module.exports = User;