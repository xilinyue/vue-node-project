const mongoose = require("../common/db");
let Schema = mongoose.Schema;

let mailSchema = new Schema({
    fromUser: {type: String, required: true},
    toUser: {type: String, required: true},
    title: {type: String, required: true},
    context: {type: String, required: true},
});

let mail = mongoose.model("mail", mailSchema);

module.exports = mail;