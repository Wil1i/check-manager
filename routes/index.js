let {Router} = require("express")
Router = new Router()

const loginController = require("../controllers/loginController")
Router.get("/auth", loginController.get)

const registerController = require("../controllers/registerController")
Router.post("/register", registerController.post)

const homeController = require("../controllers/homeController")
Router.get("/", homeController.get)

module.exports = Router