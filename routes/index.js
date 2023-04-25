var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message", messages: messages });
});

router.get("/new",function(req,res){
  res.render("form")
})
router.post("/new",function(req,res){
  const user = req.body.username;
  const text = req.body.text;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect('/')
})
module.exports = router;
