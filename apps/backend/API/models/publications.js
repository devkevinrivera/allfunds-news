let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const publicationSchema = new Schema({
    publicationId: { type: String },
    title: { type: String },
    description: { type: String },
    date: { type: Date },
    content: { type: String },
    author: { type: String },
    archiveDate: { type: Date },
});

module.exports = mongoose.model('publications', publicationSchema);