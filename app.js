//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/hungerstayDB", {useNewUrlParser: true});

const articleSchema = {
name: String,
id: Number,
Language:String,
Framework:String
};

const Article = mongoose.model("Article", articleSchema);

///////////////////////////////////Requests Targetting all Articles////////////////////////

app.route("/articles")

.get(function(req, res){
  Article.find(function(err, foundArticles){
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
});


////////////////////////////////Requests Targetting A Specific Article////////////////////////

app.route("/articles/:articleid")


.get(function(req, res){

  Article.findOne({id: req.params.articleid}, function(err, foundArticle){
    if (foundArticle) {
      res.send(foundArticle);
    } else {
      Article.findOne({name: req.params.articleid}, function(err, foundArticle){
        if (foundArticle) {
          res.send(foundArticle);
        } else {
        res.send("404 : No articles matching was found");
    }
    }
    );
}
}
);
})


.put(function(req, res){

  Article.update(
    {id: req.params.articleid},
    {id: req.body.id, name: req.body.name, Language: req.body.Language,  Framework: req.body.Framework},
    {overwrite: true},
    function(err){
      if(!err){
        res.send("Successfully updated the selected article.");
      }
    }
  );
})


.delete(function(req, res){

  Article.deleteOne(
    {id: req.params.articleid},
    function(err){
      if (!err){
        res.send("Successfully deleted the corresponding article.");
      } else {
        res.send(err);
      }
    }
  );
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
