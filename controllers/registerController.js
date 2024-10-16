const User = require("../models/User")

const post = async (req, res) => {
  if(req.body.password != req.body.passwordRepeat) return req.flash("danger", "کلمه عبور با تکرار آن مطابقت ندارد.");

  await User.create({
    username : req.body.username,
    password : req.body.password,
    userRank : "admin"
  })

  req.flash("success", "با موفقیت ثبت نام انجام شد.")

  res.redirect("/auth")
}

module.exports = {
  post
}