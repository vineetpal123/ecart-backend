
// database.js
const mongoose = require("mongoose");
const dbPath = "mongodb+srv://admin:alpha@123@ecartcluster-oqbyz.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;