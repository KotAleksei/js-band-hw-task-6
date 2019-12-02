import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoitem';
import './style.css';

function TodoList (props) {
  const { todolist } = props;
  return (
    <ul className='todoList'>
      {
        todolist.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo}/>
          );
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  todolist: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired
  })).isRequired
};

export default TodoList;