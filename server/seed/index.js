const program = require('commander');
const { models } = require('../models');
const seedUsers = require('./users.seed');

const seedMethods = {
  "Users": seedUsers,
}

const modelNames = Object.keys(models);


program.version('0.1.0');
for (let name of modelNames) {
  program.option(`--${name}s`, `Seed ${name}`)
}
program.parse(process.argv);


const seedPromises = [];
for(let methodName in seedMethods) {
  if(program[methodName]) {
    seedPromises.push(seedMethods[methodName]())
  }
}

Promise.all(seedPromises)
  .then(res => console.log("Finished Seeding"))
  .catch(err => console.log(err))

