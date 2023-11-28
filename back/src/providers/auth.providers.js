const { User } = require("../models/index.models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    throw new Error(err)
  }
};

const validateUser = async (body) => {
  try {
    const foundUser = await User.findAll({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (foundUser.length == 0) {
      return null;
    }
    return foundUser;
  } catch (err) {
    throw new Error(err)
  }
};

module.exports = { createUser, validateUser };
