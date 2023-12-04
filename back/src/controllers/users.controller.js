const errorHandler = require("../handlers/ErrorHandler");
const HttpResponse = require("../handlers/HttpResponse");
const { userService } = require("../services/index.services");

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    return HttpResponse.created(res, newUser);
  } catch (error) {
    return errorHandler(error, res, "Crear usuario")
  }
};

const getUser = async (req, res) => {
  const action = "Buscar usuario"
  try {
    const user = await userService.getUser(req.params.userId);
    if (!user) {
      return HttpResponse.notFound(res, { action: action, error: "Usuario no encontrado" });
    } 
    return HttpResponse.success(res, user);
    
  } catch (error) {
      return HttpResponse.serverError(res, { action: action, error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (!users) {
      return HttpResponse.notFound(res, { action: "Buscar usuarios", message: "No se encontraron" });
    } else {
      return HttpResponse.success(res, users);
    }
  } catch (err) {
      return HttpResponse.serverError(res, { action: "Buscar usuarios", error: err.message });
  }
}

module.exports = { createUser, getUser, getAllUsers };
