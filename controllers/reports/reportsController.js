const get = async (req, res) => {
  res.render("reports/reports", {
    flash : req.flash()
  })
}

module.exports = {
  get
}