const mongoose = require("../common/db");
let comment = new mongoose.Schema({
    movie_id: {type: String, required: true},
    username: {type: String, required: true},
    context: {type: String, required: true},
    check: {type: Boolean, default: false}
});

module.exports = mongoose.model("comment", comment);