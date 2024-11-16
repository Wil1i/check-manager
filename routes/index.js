let {Router} = require("express")
const { isUserLoggedIn, isUserNotLoggedIn } = require("../middlewares/auth")
Router = new Router()

const loginController = require("../controllers/loginController")
Router.get("/auth", isUserNotLoggedIn, loginController.get)
Router.post("/auth", isUserNotLoggedIn, loginController.post, loginController.func)
Router.get("/logout", isUserLoggedIn, loginController.logout)

const registerController = require("../controllers/registerController")
Router.post("/register", isUserNotLoggedIn, registerController.post)

const buyersController = require("../controllers/buyers/buyersController")
Router.get("/buyers", isUserLoggedIn, buyersController.get)

const logsController = require("../controllers/logsController")
Router.get("/logs", isUserLoggedIn, logsController.get)

const homeController = require("../controllers/homeController")
Router.get("/", isUserLoggedIn, homeController.get)

module.exports = Router