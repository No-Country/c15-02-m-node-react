const { accountProvider } = require("../providers/index.providers")

const createAccount = async (currency, userId) =>{
  try {
    const account = await accountProvider.createAccount(currency, userId)
    return account
  } catch (error) {
    throw new Error(error)
  }
}

const getAccounts = async (userId) => {
  try {
    const accounts = await accountProvider.getAccounts(userId)
    return accounts
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { createAccount, getAccounts }