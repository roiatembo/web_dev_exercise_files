const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Am horny");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: roiatembo@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Am a sex addict and movie buff");
});

app.listen(3000, function() {
    console.log("server has started on port 3000");
});
