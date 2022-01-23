"use strict";
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/eventRoutes");
// express app
const app = express();
//connect to mongodb
const dbURI = "mongodb+srv://MongoUser:MongoTest@mongodata.y5euo.mongodb.net/MongoData?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
// register view engine
app.set("view engine", "ejs");
//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //accepting form data
app.use(morgan("dev"));
//routes
app.get("/", (req, res) => {
    res.redirect("/events");
});
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});
//event routes
app.use('/events', eventRoutes);
// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
//# sourceMappingURL=app.js.map