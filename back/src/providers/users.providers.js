const { User } = require("../models/index.models");

const createUser = async (user) => {
  console.log(user.password)
  try {
    const newUser = await User.create(user);
    console.log(newUser);
    return newUser;
  } catch (err) {
    throw new Error(err)
  }
};

const getUser = async (userId) => {
  try {
    const user = await User.findByPk(userId, { include: { all: true } });
    return user;
  } catch (err) {
    throw new Error(err)
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (err) {
    throw new Error(err)
  }
};

module.exports = { createUser, getUser, getAllUsers };
