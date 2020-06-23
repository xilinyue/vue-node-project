const mongoose = require("../common/db");

//用户数据集
let userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    userMail: {type: String, required: true},
    userPhone: {type: String, required: true},
    userAdmin: {type: Boolean, default: false},
    userPower: {type: Number, default: 0},
    userStop: {type: Boolean, default: false},
});

let userModel = mongoose.model('user',userSchema);

module.exports = userModel;