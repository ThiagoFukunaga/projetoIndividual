var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/guardarQuiz", function(req, res){
   quizController.guardarResultadoQuiz(req, res)
})

module.exports = router;
