const { userProvider } = require("../providers/index.providers");
const bcrypt = require("bcrypt");

const createUser = async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    console.log(hashedPassword, " user: ",user);
    user.password = hashedPassword;
    console.log(user);
    const createdUser =  await userProvider.createUser(user);
    return createdUser
  } catch (error) {
    throw new Error(error)
  }
};

const getUser = async (userId) => {
  try {
    const user = await userProvider.getUser(userId);
    return user;
  } catch (error) {
    throw new Error(error)
  }
};

const getAllUsers = async () => {
  try {
    const users = await userProvider.getAllUsers();
    return users;
  } catch (error) {
    throw new Error(error)
  }
};


module.exports = { createUser, getUser, getAllUsers };
