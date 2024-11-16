const Check = require("../../models/Check")
const log = require("../../utils/log")

const post = async (req, res) => {
  const findCheck = await Check.findByPk(req.query.id)

  if(!findCheck) return res.flash("danger", "چک مورد نظر یافت نشد.");

  log.submit("delete-check", req.user.id, `چک ${findCheck.customerName} حذف شد`, `چک به نام ${findCheck.customerName} شماره تماس ${findCheck.customerNumber} توسط ${req.user.username} حذف شد.`)

  await findCheck.destroy()

  res.redirect("/checks")
}

module.exports ={
  post
}