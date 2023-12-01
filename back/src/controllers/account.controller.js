const { accountService } = require("../services/index.services");

const createAccount = async (req, res) => {
  try {
    const userId = req.params.userId;
    const currency = req.params.currency.toLowerCase();
    //Verificar moneda adecuada y comparar id's
    if (currency != "ars" && currency != "usd")
      return res
        .status(400)
        .json({ message: "Moneda incorrecta (solo usd/ars)" });
    if (req.user.id == userId) {
      // Crear cuenta para el usuario
      const account = await accountService.createAccount(currency, userId);
      if (!account)
        res
          .status(400)
          .json({ action: "Crear cuenta", message: "Informacion incorrecta" });
      return res.status(201).json({ message: "Cuenta creada", account });
    }
    return res
      .status(403)
      .json({ message: "Prohibido - no puedes acceder a este recurso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

const getAccounts = async (req, res) => {
  try {
    const userId = req.params.userId;
    //comparar id's
    if (req.user.id == userId) {
      //buscar cuentas
      const accounts = await accountService.getAccounts(userId);
      if (!accounts)
        return res
          .status(404)
          .json({
            action: "Ver cuentas",
            message: "No se encontraron cuentas",
          });
      return res.status(200).json({ accounts });
    }
    return res
      .status(403)
      .json({ message: "Prohibido - no puedes acceder a este recurso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

const updateAccount = async (req, res) => {
  const { userId, accountId } = req.params
  try {
    if(req.user.id == userId){
      const update = await accountService.updateAccount(req.body, accountId)
      if(!update) return res
      .status(404)
      .json({
        action: "Modificar cuenta",
        message: "No se encontro cuenta",
      });
      return res.status(200).json({update})
    }
    return res
      .status(403)
      .json({ message: "Prohibido - no puedes acceder a este recurso" });
  } catch (error) {
    return res.status(500).json({ error: "Error del servidor" });
  }
}

const deleteAccount = async (req, res) => {
  const { userId, accountId } = req.params;
  try {
    if (req.user.id == userId) {
      const deletedAccount = await accountService.deleteAccount(
        userId,
        accountId
      );
      if (!deletedAccount)
        return res.status(404).json({ message: "No account found" });
      return res.status(200).json({ account: deletedAccount });
    }
    return res
      .status(403)
      .json({ message: "Prohibido - no puedes acceder a este recurso" });
  } catch (error) {
    return res.status(500).json({ error: "Error del servidor" });
  }
};

const getAllDeletedAccounts = async (req, res) => {
  try {
    const accounts = await accountService.getAllDeletedAccounts();
    if (!accounts)
      res
        .status(404)
        .json({
          action: "Ver cuentas borradas",
          message: "No se encontraron cuentas",
        });
    return res.status(200).json({ accounts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  createAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
  getAllDeletedAccounts,
};
