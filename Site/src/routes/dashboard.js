var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/buscarAcertos", function(req, res){
   dashboardController.buscarAcertos(req, res)
})

module.exports = router;
