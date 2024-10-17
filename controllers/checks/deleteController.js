const Check = require("../../models/Check")

const post = async (req, res) => {
  const findCheck = await Check.findByPk(req.query.id)

  if(!findCheck) return res.flash("danger", "چک مورد نظر یافت نشد.");

  await findCheck.destroy()

  res.redirect("/checks")
}

module.exports ={
  post
}