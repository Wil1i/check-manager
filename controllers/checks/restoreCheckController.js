const Check = require("../../models/Check")
const log = require("../../utils/log")

const get = async (req, res) => {
  const findCheck = await Check.findByPk(req.query.id)

  if(!findCheck) {req.flash("danger", "چک مورد نظر یافت نشد."); return res.redirect("/buyers")}

  log.submit("restore-check", req.user.id, `چک ${findCheck.customerName} عودت فروش داده‌شد`, `چک ${findCheck.customerName} به شماره چک ${findCheck.checkNumber} از ${findCheck.buyerId} توسط ${req.user.username} عودت داده شد.`)

  await findCheck.update({buyerId : null, soledPrice : null, soledPercent : null})

  req.flash("success", "چک با موفقیت عودت شد")

  res.redirect(req.query.return)
}

module.exports = {
  get
}