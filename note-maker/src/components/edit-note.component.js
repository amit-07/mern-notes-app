import React, { Component } from 'react';
import axios from 'axios';

export default class EditNote extends Component {
    constructor(props) {
        super(props);

        this.onChangeNoteDescription = this.onChangeNoteDescription.bind(this);
        this.onChangeNoteTitle = this.onChangeNoteTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            note_description: '',
            note_title: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/notes/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    note_description: response.data.note_description,
                    note_title: response.data.note_title
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeNoteDescription(e) {
        this.setState({
            note_description: e.target.value
        });
    }

    onChangeNoteTitle(e){
        this.setState({
            note_title: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            note_description: this.state.note_description,
            note_title: this.state.note_title,
        };
        console.log(obj);
        axios.post('http://localhost:4000/notes/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data))
            .then(this.props.history.push('/'));
    }

    render() {
        return (
                <div>
                    <h3 align="center">Update Note</h3>
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
                            <textarea  type="text"
                                    className="form-control"
                                    value={this.state.note_description}
                                    onChange={this.onChangeNoteDescription}
                            />
                        </div>

                        <br />

                        <div className="form-group">
                            <input type="submit" value="Update Note" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
        )
    }
}