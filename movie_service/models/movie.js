const mongoose = require("../common/db");
let Schema = mongoose.Schema;

let movieSchema = new Schema({
    movieName: {type: String, required: true},
    movieImg: {type: String, required: true},
    movieVideo: {type: String, required: true},
    movieDownload: {type: String, required: true},
    movieTime: {type: String, required: true},
    movieNumSuppose: {type: Number, required: 0},
    movieNumDownload: {type: Number, required: 0},
    movieMainPage: {type: Boolean, required: false}
});

let movie = mongoose.model("movie", movieSchema);

module.exports = movie;