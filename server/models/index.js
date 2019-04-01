require('dotenv').config();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')
const glob = require('glob')


const dbName = process.env.NODE_ENV == 'test' ?  process.env.TEST_DB_NAME : process.env.DB_NAME;

mongoose.connect(`mongodb://localhost:27017/${dbName}`, {useNewUrlParser: true});
const db = mongoose.connection

const sessionStore = new MongoStore({mongooseConnection: db})

const models = {};

const modelPaths = glob.sync('**/**.model.js', {absolute: true})

for(let file of modelPaths) {
  const modelName = require(file).modelName
  const model = require(file)
  models[modelName] = model
}

module.exports = {
  db,
  sessionStore,
  models: {
    ...models
  }
}


