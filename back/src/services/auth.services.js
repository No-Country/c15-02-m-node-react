const { authProvider } = require("../providers/index.providers");

const createUser = async (user) => {
  try {
    const createdUser =  await authProvider.createUser(user);
    return createdUser
  } catch (error) {
    throw new Error(error)
  }
};

const validateUser = async (body) => {
  try {
    const userFound = await authProvider.validateUser(body);
    return userFound;
  } catch (error) {
    throw new Error(error)
  }
};



module.exports = { createUser, validateUser };
