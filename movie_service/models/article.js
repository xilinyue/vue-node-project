const mongoose = require("../common/db");
let article = new mongoose.Schema({
    articleTitle: {type: String, required: true},
    articleContext: {type: String, required: true},
    articleTime: {type: String, required: true}
});

module.exports = mongoose.model("article", article);