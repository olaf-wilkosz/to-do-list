import React, { Component } from 'react';
import ToDos from './components/ToDos';
import './App.css';

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false,
      },
    ]
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
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <ToDos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default App;