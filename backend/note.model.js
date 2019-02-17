const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Note = new Schema({
    note_title:{
        type: String
    },
    note_description: {
        type: String
    }
});

module.exports = mongoose.model('Note', Note);