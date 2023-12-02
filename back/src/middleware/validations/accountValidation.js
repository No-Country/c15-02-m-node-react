const { check } = require("express-validator");
const checkValidationResult = require("./validator");

const validateMoneda = check("moneda").custom((value, { req }) => {
  if (req.body.moneda !== undefined) {
    throw new Error("Moneda es inmutable");
  }
  return true;
});

const validateTipo = check("tipo").custom((value, { req }) => {
  if (req.body.tipo !== undefined) {
    throw new Error("Tipo es inmutable");
  }
  return true;
});

const validateBalance = check("balance").custom((value, { req }) => {
  if (req.body.balance !== undefined) {
    throw new Error("Balance es inmutable");
  }
  return true;
});

const validateActiva = check("activa")
  .trim()
  .isBoolean().withMessage('Activa solo acepta booleano (true/false)')
  .optional();

const validateAccountUpdate = [
  validateMoneda,
  validateTipo,
  validateBalance,
  validateActiva,
  checkValidationResult,
];

module.exports = { validateAccountUpdate };
