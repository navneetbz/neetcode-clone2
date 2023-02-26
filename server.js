const express = require("express");

const app = express();

app.use(express.static("frontend"))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/frontend/index.html")
})

app.listen(3000, function() {
    console.log("Server running on http://localhost:3000")
})
