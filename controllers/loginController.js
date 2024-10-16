const User = require("../models/User")

const get = async (req, res) => {
  const users = await User.findAll();

  (users[0]) 
    ? res.render("login")
    : res.render("register")
}

const post = (req, res) => {

}

module.exports = {
  get,
  post
}