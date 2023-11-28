const { check } = require("express-validator");
const checkValidationResult = require("./validator");


const validateName = check('nombre')
  .trim()
  .isAlpha()
  .notEmpty().withMessage('El nombre es requerido');

const validateLastName = check('apellido')
  .trim()
  .isAlpha()
  .notEmpty().withMessage('El apellido es requerido');

const validateDNI = check('dni')
  .trim()
  .isInt().withMessage("El dni tiene que ser numérico")
  .notEmpty().withMessage("Dni requerido")
  

const validateTutorial = check('tutorial')
  .trim()
  .isBoolean()
  .notEmpty().withMessage('Tutorial true/false')
  .optional()

const validateEmail = check("email")
  .trim()
  .notEmpty()
  .withMessage("Email requerido")
  .isEmail()
  .withMessage("Email invalido");

const validatePassword = check("password")
  .trim()
  .notEmpty()
  .withMessage("Contraseña requerida")
  .isLength({ min: 6 })
  .withMessage("Contraseña de al menos 6 caracteres, 1 número y 1 letra")
  .matches(/^(?=.*[A-Z])(?=.*[0-9])/)
  .withMessage(
    "Contraseña de al menos 6 caracteres, 1 número y 1 letra"
  );

const validateLogin = [
  validateEmail, 
  validatePassword, 
  checkValidationResult
];

const validateRegistration = [
  validateName, 
  validateLastName, 
  validateDNI, 
  validatePassword, 
  validateEmail, 
  validateTutorial,
  checkValidationResult
]

module.exports = { validateLogin, validateRegistration }
