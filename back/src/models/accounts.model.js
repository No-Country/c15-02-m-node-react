const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");
const Transaction = require("./transactions.model");

const Account = sequelize.define("Accounts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  moneda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'activa',
  },
},{
  paranoid: true,
  timestamps: true, 
  deletedAt: "deletedAt", 
});

Account.hasMany(Transaction, {onDelete:"CASCADE"})
Transaction.belongsTo(Account)

module.exports=Account