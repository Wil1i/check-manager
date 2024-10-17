let {Router} = require("express")
const { isUserLoggedIn, isUserNotLoggedIn } = require("../middlewares/auth")
Router = new Router()

const loginController = require("../controllers/loginController")
Router.get("/auth", isUserNotLoggedIn, loginController.get)
Router.post("/auth", isUserNotLoggedIn, loginController.post, loginController.func)
Router.get("/logout", isUserLoggedIn, loginController.logout)

const registerController = require("../controllers/registerController")
Router.post("/register", isUserNotLoggedIn, registerController.post)

const homeController = require("../controllers/homeController")
Router.get("/", isUserLoggedIn, homeController.get)

module.exports = Router