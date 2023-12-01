const { Account, User } = require("../models/index.models");

const createAccount = async (currency, userId) => {
  try {
    const account = await Account.create({
      moneda: currency,
      tipo: 'ahorro', 
      balance: 0.0, 
      estado: 'activa',
      UserId: userId, 
    });
    return account;
  } catch (err) {
    throw new Error(err)
  }
};

const getAccounts = async (userId) => {
  try {   
    const user = await User.findByPk(userId, {
      include: Account,
    });
    const accounts = user.Accounts;
    return accounts
  } catch (error) {
    throw new Error(error)
  }
}


module.exports = { createAccount, getAccounts }