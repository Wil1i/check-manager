const Check = require("../../models/Check")

const get = async (req, res) => {
  const findCheck = await Check.findByPk(req.query.id)

  if(!findCheck) {req.flash("danger", "چک مورد نظر یافت نشد."); return res.redirect("/buyers")}

  await findCheck.update({buyerId : null, soledPrice : null, soledPercent : null})

  req.flash("success", "چک با موفقیت عودت شد")

  res.redirect(req.query.return)
}

module.exports = {
  get
}