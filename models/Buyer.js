const db = require("../configs/db")
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

module.exports = Buyer