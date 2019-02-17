import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateNote from "./components/create-note.component";
import EditNote from "./components/edit-note.component";
import NotesList from "./components/notes-list.component";
import logo from "./components/note-png-icon.png";
import { PrivateRoute } from './Routes/PrivateRoute';
import  { LoginPage } from './components/login.component';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} width="30" height="30" alt="note maker" />
            </Link>
            <Link to="/" className="navbar-brand">MERN-Stack Notes App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Notes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Note</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <PrivateRoute path="/" exact component={NotesList} />
          <PrivateRoute path="/edit/:id" component={EditNote} />
          <PrivateRoute path="/create" component={CreateNote} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
