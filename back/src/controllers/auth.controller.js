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
  try {
    const validateUser = await authService.validateUser(req.body);
    if(!validateUser){
      return res.status(404).json({message:"User not found"})
    }
    //TODO => token
    return res.status(200).json({message:"successful login"});
  } catch (err) {
    res.status(500).json({ action: "Validate User", error: err.message });
  }
};


module.exports = { createUser, validateUser };
