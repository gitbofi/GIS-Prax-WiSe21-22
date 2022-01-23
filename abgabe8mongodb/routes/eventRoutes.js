"use strict";
const express = require("express");
const Event = require("../models/event");
const router = express.Router();
router.get("/", (req, res) => {
    Event.find()
        .then((result) => {
        res.render("index", { title: "All Events", events: result });
    })
        .catch((err) => {
        console.log(err);
    });
});
router.post("/", (req, res) => {
    const event = new Event(req.body);
    event
        .save()
        .then((result) => {
        res.redirect("/events");
    })
        .catch((err) => {
        console.log(err);
    });
});
router.get("/create", (req, res) => {
    res.render("create", { title: "Create New Event" });
});
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Event.findById(id)
        .then((result) => {
        res.render("details", { event: result, title: "Event Details" });
    })
        .catch((err) => {
        console.log(err);
    });
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Event.findByIdAndDelete(id)
        .then((result) => {
        res.json({ redirect: "/events" });
    })
        .catch((err) => {
        console.log(err);
    });
});
module.exports = router;
//# sourceMappingURL=eventRoutes.js.map