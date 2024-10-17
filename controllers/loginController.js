const User = require("../models/User")
const passport = require("passport")

const get = async (req, res) => {
  const users = await User.findAll();

  (users[0]) 
    ? res.render("login")
    : res.render("register")
}

const post = passport.authenticate("local", {
  failureRedirect: "/auth",
  failureFlash: true,
  session: true,
});

const func = (req, res) => {
  var redirectTo = req.session.redirectURL || "/";
  res.redirect(redirectTo);
};

const logout = (req, res) => {
  req.logout(err => {
      res.redirect("/auth")
  })
}

module.exports = {
  get,
  post,
  func,
  logout
}