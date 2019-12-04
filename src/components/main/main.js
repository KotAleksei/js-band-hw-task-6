import React, { Component } from 'react';
import HeadOfTodo from './headoftodo';
import ModalWindow from './modalwindow';
import TodoList from './todolist/todolist';

let sortBy = {
  searchText: '',
  priority: 'all',
  completed: 'all',
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      showModalWindow: false,
      items: [],
      filterItems: [],
      editItem: undefined,
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.creatTodo = this.creatTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.sortedItems = this.sortedItems.bind(this);
    this.resetItem = this.resetItem.bind(this);
  }

  handleShowModal() {
    this.setState(prevState => ({
      showModalWindow: !prevState.showModalWindow,
    }));
  }

  creatTodo(todo) {
    this.setState(prevState => {
      return {
        items: [
          ...prevState.items,
          {
            id: Date.now(),
            done: false,
            ...todo,
          },
        ],
      };
    });

    this.sortedItems(sortBy);
    this.handleShowModal();
  }

  editTodo(todo) {
    const { id, title, description, priority } = todo;
    this.setState(prevState => {
      return {
        editItem: todo,
        items: prevState.items.map(todoItem => {
          const newItem = { ...todoItem };
          if (todoItem.id === id) {
            newItem.title = title;
            newItem.description = description;
            newItem.priority = priority;
          }
          return newItem;
        }),
      };
    });

    this.sortedItems(sortBy);
    this.handleShowModal();
  }

  toggleDone(todo) {
    this.setState(prevState => ({
      items: prevState.items.map(todoItem => {
        const newItem = { ...todoItem };
        if (todoItem.id === todo.id) {
          newItem.done = !todo.done;
        }
        return newItem;
      }),
    }));

    this.sortedItems(sortBy);
  }

  deleteTodo(todo) {
    const { items } = this.state;
    this.setState({
      items: items.filter(todoItem => todoItem.id !== todo.id),
    });

    this.sortedItems(sortBy);
  }

  sortedItems(filter) {
    setTimeout(() => {
      const { items } = this.state;
      let copyTodos = [...items];
      sortBy = { ...filter };

      switch (filter.completed) {
        case 'done': {
          copyTodos = copyTodos.filter(todoItem => todoItem.done);
          break;
        }
        case 'open': {
          copyTodos = copyTodos.filter(todoItem => !todoItem.done);
          break;
        }
        default:
          break;
      }

      switch (filter.priority) {
        case 'high': {
          copyTodos = copyTodos.filter(
            todoItem => todoItem.priority === 'high',
          );
          break;
        }
        case 'normal': {
          copyTodos = copyTodos.filter(
            todoItem => todoItem.priority === 'normal',
          );
          break;
        }
        case 'low': {
          copyTodos = copyTodos.filter(todoItem => todoItem.priority === 'low');
          break;
        }
        default:
          break;
      }
      if (filter.searchText) {
        copyTodos = copyTodos.filter(todoItem =>
          todoItem.title.includes(filter.searchText),
        );
      }

      copyTodos.sort((x, y) => x.done - y.done);
      this.setState({ filterItems: copyTodos });
    });
  }

  resetItem() {
    this.setState({ editItem: undefined });
  }

  render() {
    const { showModalWindow, filterItems, editItem } = this.state;

    return (
      <>
        <HeadOfTodo
          handleShowModal={this.handleShowModal}
          handleSorted={this.sortedItems}
        />
        <ModalWindow
          show={showModalWindow}
          handleShowModal={this.handleShowModal}
          creatTodo={this.creatTodo}
          editTodo={this.editTodo}
          editItem={editItem}
          resetItem={this.resetItem}
        />
        <TodoList
          todolist={filterItems}
          editTodo={this.editTodo}
          toggleDone={this.toggleDone}
          deleteTodo={this.deleteTodo}
        />
      </>
    );
  }
}

export default Main;
