const { createToken } = require("../middleware/auth.mdw");
const errorHandler = require("../handlers/ErrorHandler");
const HttpResponse = require("../handlers/HttpResponse");
const { authService } = require("../services/index.services");

const createUser = async (req, res) => {
  try {
    const newUser = await authService.createUser(req.body);
    return HttpResponse.created(res, newUser);
  } catch (error) {
    return errorHandler(error, res, "Crear usuario")
  }
};

const validateUser = async (req, res) => {
  const action = "Validar usuario"
  try {
    const user = await authService.validateUser(req.body);
    if(!user){
      return HttpResponse.notFound(res, {action, message:"Usuario no encontrado"})
    }
    const generatedToken = createToken(user)
    res.cookie('jwt', generatedToken, { httpOnly: true }); // revisar funcionamiento
    return HttpResponse.success(res, {user:user, token:generatedToken}) 
  } catch (error) {
    return errorHandler(error, res, action);
  }
};


module.exports = { createUser, validateUser };
