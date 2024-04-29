const mongoose = require('mongoose')

const EventDataSchema = new mongoose.Schema({
    title: String,
    start: Date,
    end: Date,
    tags: String,
    desc: String,
    isaholiday: Boolean,
    cor: String
});

module.exports = mongoose.model('Events', EventDataSchema);