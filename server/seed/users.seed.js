const { User } = require('../models').models;

const { Users } = require('../secrets/seedValues');



const seedUsers = async () => {
  const usersArr = [
    ...Users
  ];
  try {
    for(let user of usersArr) {
      await User.create(user);
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports =  seedUsers;