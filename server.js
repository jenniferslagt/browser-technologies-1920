const path = require('path')
const fs = require('fs-extra');
// const PORT = process.env.PORT || 3000;
//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.static("public"));

//placeholders for added task
let product = [];

//placeholders for removed task
let complete = [];

//post route for adding new task 
app.post("/addproduct", function (req, res) {
    var newProduct = req.body.newproduct;
    //add the new task from the post route
    product.push(newProduct);
    res.redirect("/");
});

app.post("/removeproduct", function (req, res) {
    var completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        //check if the completed task already exits in the task when checked, then remove it
        product.splice(product.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            product.splice(product.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});

//render the ejs and display added task, completed task
app.get("/", function (req, res) {
    res.render("index", {
        task: product,
        complete: complete
    });
    console.log("producten", product)
    let jsonData = JSON.stringify(product);
    console.log('jsondata', jsonData)
    fs.writeFileSync("products.json", jsonData);
});

//set app to listen on port 3000
app.listen(3000, function () {
    console.log("server is running on port 3000");
});