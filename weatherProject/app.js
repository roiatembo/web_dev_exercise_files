const express = require("express");
const https = require("https")

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-23.848281&lon=29.414443&appid=773f78fa0d3317bd4f712fa38c44bc50"
    https.get(url, function(r) {
        console.log(r.statusCode)

        r.on("data", function(data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            console.log(weatherDescription)
        })
    })


    res.send("Server is up and running")
})




app.listen(3000, function() {
    console.log("Server is running on port 3000");
});