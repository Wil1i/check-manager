let { Router } = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router

const reportsController = require("../controllers/reports/reportsController")
Router.get("/", isUserLoggedIn, reportsController.get)

module.exports = Router