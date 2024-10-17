let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const buyersController = require("../controllers/buyers/buyersController")
Router.get("/", isUserLoggedIn, buyersController.get)

const newBuyersController = require("../controllers/buyers/newBuyerController")
Router.get("/new", isUserLoggedIn, newBuyersController.get)
Router.post("/new", isUserLoggedIn, newBuyersController.post)

const deleteBuyersController = require("../controllers/buyers/deleteBuyerController")
Router.post("/delete", isUserLoggedIn, deleteBuyersController.post)

module.exports = Router