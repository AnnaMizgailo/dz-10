const express = require("express");
const path = require("path");

const app = express();

const {addStudent, maxAvgMark, maxCoinCount, maxGemCount} = require("./data/students");

app.use((req, res, next) => {
    next();
});

app.use(express.static("public"));

app.use(express.json());

app.get("/bestStudents", (req, res) => {
    const data = maxAvgMark() + " " + maxGemCount() + " " + maxCoinCount();
    res.status(200).send(data);
});

app.post("/saveStudent", (req, res) =>{
    const data = req.body;
    addStudent(data);

    res.status(200).send("Student has been added");
});

app.use((req, res, next) => {
    res.status(404).send("<h1>Not found</h1>");
});

app.listen(3000, ()=> {
    console.log("port 3000 is working");
})
