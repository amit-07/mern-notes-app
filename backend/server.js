require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const basicAuth = require('helpers/basic-auth');
const errorHandler = require('helpers/error-handler');

const PORT = process.env.PORT || 4000;

let Note = require('./note.model');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/notes', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const noteRoutes = express.Router();

noteRoutes.route('/').get(function(req, res) {
    Note.find(function(err, notes) {
        if (err) {
            console.log(err);
        } else {
            res.json(notes);
        }
    });
});

noteRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Note.findById(id, function(err, note) {
        if (err) {
            console.log(err);
        } else{
            res.json(note);
        }
    });
});

noteRoutes.route('/add').post(function(req, res) {
    let note = new Note(req.body);
    note.save()
        .then(note => {
            res.status(200).json({'note': 'note added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new note failed');
        });
});

noteRoutes.route('/update/:id').post(function(req, res) {
    Note.findById(req.params.id, function(err, note) {
        if (!note)
            res.status(404).send("data is not found");
        else
            note.note_description = req.body.note_description;
            note.note_title = req.body.note_title;

            note.save().then(note => {
                res.json('Note updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/notes', noteRoutes);
// use basic HTTP auth to secure the api
app.use(basicAuth);

// api routes
app.use('/users', require('./login/login.controller'));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});