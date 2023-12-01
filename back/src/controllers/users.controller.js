const { userService } = require("../services/index.services");

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.userId);
    if (!user) {
      res.status(404).json({ action: "Buscar usuario", error: "Usuario no encontrado" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ action: "Buscar usuario", error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (!users) {
      res.status(404).json({ action: "Buscar usuarios", error: "No se encontraron" });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json({ action: "Buscar usuarios", error: err.message });
  }
}

module.exports = { getUser, getAllUsers };
