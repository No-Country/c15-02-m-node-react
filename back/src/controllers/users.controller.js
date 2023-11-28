const { userService } = require("../services/index.services");

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.userId);
    if (!user) {
      res.status(404).json({ action: "getUser", error: "User Not Found" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ action: "getUser", error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (!users) {
      res.status(404).json({ action: "getAllUsers", error: "No users Found" });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json({ action: "getAllUsers", error: err.message });
  }
}

module.exports = { getUser, getAllUsers };
