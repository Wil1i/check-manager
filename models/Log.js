const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Log = db.define("logs", {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },

  type : {
    type : DataTypes.TEXT
  },

  title : {
    type : DataTypes.TEXT
  },

  user : {
    type : DataTypes.INTEGER
  },

  description : {
    type : DataTypes.TEXT
  }
})

Log.sync()

module.exports = Log