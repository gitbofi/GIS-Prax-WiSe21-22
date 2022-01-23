const express = require("express");
const Event = require("../models/event");

const router = express.Router();

router.get("/", (req: any, res: any) => {
  Event.find()
    .then((result: any) => {
      res.render("index", { title: "All Events", events: result });
    })
    .catch((err: any) => {
      console.log(err);
    });
});

router.post("/", (req: any, res: any) => {
  const event = new Event(req.body);

  event
    .save()
    .then((result: any) => {
      res.redirect("/events");
    })
    .catch((err: any) => {
      console.log(err);
    });
});

router.get("/create", (req: any, res: any) => {
  res.render("create", { title: "Create New Event" });
});

router.get("/:id", (req: any, res: any) => {
  const id = req.params.id;
  Event.findById(id)
    .then((result: any) => {
      res.render("details", { event: result, title: "Event Details" });
    })
    .catch((err: any) => {
      console.log(err);
    });
});

router.delete("/:id", (req: any, res: any) => {
  const id = req.params.id;

  Event.findByIdAndDelete(id)
    .then((result: any) => {
      res.json({ redirect: "/events" });
    })
    .catch((err: any) => {
      console.log(err);
    });
});

module.exports = router;