const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    var today = new Date();

    if (today.getDate() === 6) {
        res.send("Its the weekend");
    } else {
        // res.write("<h1>not weekend</h1>");
        // res.write("<h2>you have to work</h2>");
        // res.send();
        res.sendFile(__dirname + "/index.html");
    }
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});