const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Check = db.define("checks", {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },

  checkValue : {
    type : DataTypes.INTEGER
  },

  checkDate : {
    type : DataTypes.TEXT
  },

  checkNumber : {
    type : DataTypes.TEXT
  },

  customerName : {
    type : DataTypes.TEXT
  },

  customerNumber : {
    type : DataTypes.TEXT
  },

  buyerId : {
    type : DataTypes.INTEGER,
  }
})

Check.sync()

module.exports = Check