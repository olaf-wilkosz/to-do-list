import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import './App.css';

export class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: uuidv4(),
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

  // Add ToDo
  addToDo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo} />
          <ToDos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo} />
        </div>
      </div>
    );
  }
}

export default App;