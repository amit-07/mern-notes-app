import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CardNote = props => (
    <div className="card text-white bg-info mb-3 w-100">
    <div className="card-header">Note
    <Link to={"/edit/"+props.note._id} style={{float: 'right', textDecoration: 'none', color: '#fff'}}>Edit</Link>
    </div>
    <div className="card-body">
      <h5 className="card-title">{props.note.note_title}</h5>
      <p className="card-text">{props.note.note_description}</p>
    </div>
    </div>
)

export default class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {notes: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/notes/')
            .then(response => {
                this.setState({ notes: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    notesList() {
        return this.state.notes.map(function(currentNote, i){
            return <CardNote note={currentNote} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3 style={{float: 'left'}}>Notes List</h3>
                <button type="button" className="btn btn-info mb-3" style={{float: 'right'}}>
                    <Link to="/create" className="nav-link" 
                    style={{textDecoration: 'none', color: '#fff'}}
                    >
                        Add Note
                    </Link>
                </button>
                <hr style={{clear: 'both'}}/>
                <div>{ this.notesList() }</div>  
            </div>
        )
    }
}