const db = require("../configs/db")
const Buyer = require("./Buyer")
const { DataTypes } = require("sequelize")

const Receipt = db.define("receipts", {
  id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
  },

  value : {
    type : DataTypes.INTEGER
  },

  buyerId : {
    type : DataTypes.INTEGER
  }
})

Receipt.sync()

module.exports = Receipt