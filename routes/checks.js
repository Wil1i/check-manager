let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const deleteCheckController = require("../controllers/checks/deleteController")
Router.post("/delete", isUserLoggedIn, deleteCheckController.post)

const newCheckController = require("../controllers/checks/newCheckController")
Router.get("/new", isUserLoggedIn, newCheckController.get)
Router.post("/new", isUserLoggedIn, newCheckController.post)

const checksController = require("../controllers/checks/checksController")
Router.get("/", isUserLoggedIn, checksController.get)

module.exports = Router