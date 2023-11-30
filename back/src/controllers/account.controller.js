const { accountService } = require("../services/index.services");

const createAccount = async (req, res) => {
  try {
    const { currency, userId } = req.params;
    //Verificar moneda adecuada y comparar id's
    if(currency != 'ars' && currency != 'usd') return res.status(400).json({message:"Moneda incorrecta (solo usd/ars)"})
    if(req.user.id == userId){
      // Crear cuenta para el usuario
      const account = await accountService.createAccount(currency, userId)
      if(!account) res.status(400).json({action: "Crear cuenta", message:"Informacion incorrecta"})
      return res.status(201).json({ message: 'Cuenta creada', account });
    }
    return res.status(403).json({ message: 'Prohibido - no puedes acceder a este recurso' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

const getAccounts = async (req, res) => {
  try {
    const userId = req.params.userId
    //comparar id's
    if(req.user.id == userId){
      //buscar cuentas
      const accounts = await accountService.getAccounts(userId)
      if(!accounts) res.status(404).json({action: "Ver cuentas", message:"No se encontraron cuentas"})
      return res.status(201).json({ accounts });
    }
    return res.status(403).json({ message: 'Prohibido - no puedes acceder a este recurso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
}

module.exports = {
  createAccount, getAccounts
};
