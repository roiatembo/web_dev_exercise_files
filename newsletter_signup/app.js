const express = require("express");
const bodyParser = require("body-parser");
const request = require("requests");
const client = require("mailchimp-marketing");
const { response } = require("express");
var resultStat = "nothing";

client.setConfig({
    apiKey: "a705cf240bc8956fc1ce612333b90ebe-us11",
    server: "us11",
  });

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;


    const run = async () => {
        const response = await client.lists.addListMember("b0f2942c75",
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
            {
                skipMergeValidation: false
            }
        );
        resultStat = response.status;
        console.log("the first one " + resultStat);
    };

    run();
    console.log("the second one " + resultStat);
    
})


// a705cf240bc8956fc1ce612333b90ebe-us11

// b0f2942c75



app.listen(3000, function() {
    console.log("Server is running on port 3000");
});