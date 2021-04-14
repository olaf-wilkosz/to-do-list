import React, { Component } from 'react';

export class ToDoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default ToDoItem;
