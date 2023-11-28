const { userProvider } = require("../providers/index.providers");

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


module.exports = { getUser, getAllUsers };
