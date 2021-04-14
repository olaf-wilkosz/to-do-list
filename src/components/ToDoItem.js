import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#f4f4f4' }}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

// PropTypes
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default ToDoItem;
