const db = require("../configs/db")
const Receipt = require("./Receipt")
const {DataTypes} = require("sequelize")

const Buyer = db.define("buyers", {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true,
  },

  name : {
    type : DataTypes.TEXT
  },

  number : {
    type : DataTypes.TEXT
  }
})

Buyer.sync()

Buyer.hasMany(Receipt, { as: "receipts" })
Receipt.belongsTo(Buyer, {
    foreignKey: "buyerId",
    as: "buyers"
})

module.exports = Buyer