import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import About from './components/pages/About';
import './App.css';

export class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // Delete ToDo
  deleteToDo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));
  }

  // Add ToDo
  addToDo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo} />
                <ToDos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;