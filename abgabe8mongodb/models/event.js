"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    loc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });
const Event = mongoose.model("Concertevent", eventSchema);
module.exports = Event;
//# sourceMappingURL=event.js.map