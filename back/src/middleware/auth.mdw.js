const jwt = require('jsonwebtoken');
require("dotenv").config();


//Authenticate the token
function authenticateToken(req, res, next) {
  let cookieToken;
  let headerToken;
  // Check for the token in the cookies
  try {
    cookieToken = req.cookies.jwt;
  } catch (error) {
    console.error("No cookie");
  }
  // Check for the token in the Authorization header
  try {
    headerToken = req.headers.authorization && req.headers.authorization.split(' ')[1];
  } catch (error) {
    console.error("No header");
  }
  // Use the token from the cookie or the header, if available
  const token = cookieToken || headerToken;

  try {
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const decoded = jwt.verify(token, process.env.SESSION_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

// Authorize the petition
function authorizeToken(req, res, next) {
  const userIdFromToken = req.user.id;
  const requestedUserId = req.params.userId; 
  //Compare user id in session with user id in param
  if (userIdFromToken != requestedUserId) {
    return res.status(403).json({ message: 'Forbidden - You do not have access to this resource' });
  }
  next();
}

function createToken(user) {
  const payload = user[0].dataValues //SQLite
  
  try {
    const token = jwt.sign(payload, process.env.SESSION_SECRET, {
      expiresIn: '2h'
    });

    return token;
  } catch (error) {
    throw error;
  }
}



module.exports = { authenticateToken, authorizeToken, createToken }