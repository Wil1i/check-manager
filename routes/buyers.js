let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const newBuyersController = require("../controllers/buyers/newBuyerController")
Router.get("/new", isUserLoggedIn, newBuyersController.get)
Router.post("/new", isUserLoggedIn, newBuyersController.post)

const deleteBuyersController = require("../controllers/buyers/deleteBuyerController")
Router.post("/delete", isUserLoggedIn, deleteBuyersController.post)

const receiptController = require("../controllers/buyers/receiptController")
Router.get("/:id/receipt", isUserLoggedIn, receiptController.get)
Router.post("/:id/receipt", isUserLoggedIn, receiptController.post)

const buyerController = require("../controllers/buyers/buyerController")
Router.get("/:id", isUserLoggedIn, buyerController.get)

const buyersController = require("../controllers/buyers/buyersController")
Router.get("/", isUserLoggedIn, buyersController.get)

module.exports = Router