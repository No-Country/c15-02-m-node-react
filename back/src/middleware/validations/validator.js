const { validationResult } = require('express-validator')

function checkValidationResult(req, res, next){
  const result = validationResult(req);
  if(result.isEmpty()) return next();
  return res.status(400).json({ error: result.array() })
}

module.exports = checkValidationResult