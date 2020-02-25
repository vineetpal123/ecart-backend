const mongoose = require("../config/database.js");

const schema = {
    title: { type: mongoose.SchemaTypes.String, required: true },
    meta: { type: mongoose.SchemaTypes.String },
    userId: { type: mongoose.SchemaTypes.String },
    status: { type: mongoose.SchemaTypes.String }
  
};
const collectionName = "course"; // Name of the collection of documents
const courseSchema = mongoose.Schema(schema);
const Course = mongoose.model(collectionName, courseSchema);
module.exports = Course;