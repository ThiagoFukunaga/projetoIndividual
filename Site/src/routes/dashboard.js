var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/buscarAcertos", function(req, res){
   dashboardController.buscarAcertos(req, res)
})

router.post("/buscarAcertosMedia", function(req, res){
   dashboardController.buscarAcertosMedia(req, res)
})

router.get("/buscarAcertosTotal", function(req, res){
   dashboardController.buscarAcertosTotal(req, res)
})
module.exports = router;
