const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require('mongoose');
const courseLib = require('./backend/lib/courseLib');

const app = express();

app.use(express.static("frontend"))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/frontend/index.html")
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, async function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("DB Connected Successfully");
        await courseLib.createFirstCourse();
        const courses = await courseLib.getAllCourses();
        console.log(courses);
        app.listen(3000, function() {
            console.log("Server running on http://localhost:3000")
        });
    }
})
// app.listen(3000, function() {
//     console.log("Server running on http://localhost:3000")
// })
