const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port  = 4000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
    let w = Number(req.body.weight);
    let h = Number(req.body.height);
    let bmi = w/(h*h);
    res.send(`Your BMI is ${bmi} kg/m^2`);
    console.log(`Your BMI is ${bmi} kg/m^2`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});