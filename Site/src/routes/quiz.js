var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/guardarQuiz", function(req, res){
   quizController.guardarResultadoQuiz(req, res)
})

router.get("/obterQuiz", function(req,res){
   quizController.obterQuiz(req,res)
})
module.exports = router;
