const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 5000;

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(staticPath));

app.set("views", templatePath);

app.set("view engine", 'hbs');
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    //res.send("I am Home page");
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render("weater");
});

app.get("*", (req, res) => {
    res.send("404 error page");
});

app.listen(port, () => {
    console.log(`Listening to the port on ${port}`);
})
