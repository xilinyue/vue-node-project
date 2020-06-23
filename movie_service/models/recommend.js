const mongoose = require("../common/db");
let recommendSchema = new mongoose.Schema({
    recommendImg: {type: String, required: true},
    recommendSrc: {type: String, required: true},
    recommendTitle: {type: String, required: true}
});

module.exports = mongoose.model("recommend", recommendSchema);