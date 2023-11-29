const { createToken } = require("../middleware/auth.mdw");
const { authService } = require("../services/index.services");

const createUser = async (req, res) => {
  try {
    const newUser = await authService.createUser(req.body);
    res.status(201).json({createdUser:newUser});
  } catch (err) {
    res.status(500).json({ action: "createUser", error: err.message });
  }
};

const validateUser = async (req, res) => {
  //console.log(req.body);
  try {
    const user = await authService.validateUser(req.body);
    if(!user){
      return res.status(404).json({message:"User not found"})
    }
    const generatedToken = createToken(user)
    res.cookie('jwt', generatedToken, { httpOnly: true });
    return res.status(200).json({user:user[0], token:generatedToken}) // user[0] => sqlite
  } catch (err) {
    res.status(500).json({ action: "Validate User", error: err.message });
  }
};


module.exports = { createUser, validateUser };
