import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            note_description: '',
            note_title: ''
        }
        this.onChangeNoteDescription = this.onChangeNoteDescription.bind(this);
        this.onChangeNoteTitle = this.onChangeNoteTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeNoteDescription(e) {
        this.setState({
            note_description: e.target.value
        });
    }

    onChangeNoteTitle(e) {
        this.setState({
            note_title: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        
        const newNote = {
            note_description: this.state.note_description,
            note_title: this.state.note_title
        }

        axios.post('http://localhost:4000/notes/add', newNote)
            .then(res => console.log(res.data));

        this.setState({
            note_description: '',
            note_title: ''
        })

        axios.get('http://localhost:4000/notes/')
            .then(response => {
                this.setState({ notes: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
            .then(this.props.history.push('/'));
        

    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Note</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.note_title}
                                onChange={this.onChangeNoteTitle}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <textarea
                                className="form-control"
                                value={this.state.note_description}
                                onChange={this.onChangeNoteDescription}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create note" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}