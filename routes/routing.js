const express = require("express");

const routing = express.Router();
const ekart = require('../controller/controller')

routing.post('/products/add', ekart.addProduct)
routing.post('/products', ekart.getProducts)

//add address
routing.post('/:userid/address/add', ekart.addAddress)

//view address
routing.get('/:userid/address/:addressid', ekart.getAddress)

//view address to modify
routing.post('/:userid/address/:addressid/modify', ekart.modifyAddress)

//deleteuser
routing.delete('/:userid/address/:addressid/delete', ekart.deleteAddress)

//viewaddresss
routing.get('/:userid/address',ekart.viewAddress)

// add users
routing.post('/adduser',ekart.addUser)

routing.get("/", ekart.myMethod)

module.exports = routing