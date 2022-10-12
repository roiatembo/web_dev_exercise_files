const express = require("express");
const app = express();

app.get("/", function (req, res) {
    response.send("<h1>Am horny");
});

app.listen(3000, function() {
    console.log("server has started on port 3000");
});
