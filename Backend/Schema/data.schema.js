const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    imgType: {type: String, required: true},
    task: {type: String, required: true},
    doneDate: {type: String, required: true},
    // date: {}
})

const Data = mongoose.model("data", dataSchema);
module.exports = Data