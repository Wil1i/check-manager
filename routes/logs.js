let {Router} = require("express")
let { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const singleLogController = require("../controllers/logs/singleLogController")
Router.get("/:id", isUserLoggedIn, singleLogController.get)

const logsController = require("../controllers/logs/logsController")
Router.get("/", isUserLoggedIn, logsController.get)

module.exports = Router