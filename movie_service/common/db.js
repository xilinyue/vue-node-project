const mongoose = require("mongoose");

let url = "mongodb://localhost:27017/movieServer";
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("数据库连接成功");
}).catch(() => {
    console.log("数据库连接失败");
});

module.exports = mongoose;