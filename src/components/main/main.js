import React, { Component } from 'react';
import HeadOfTodo from './headoftodo';
import ModalWindow from './modalwindow';
import TodoList from './todolist/todolist';

class Main extends Component{
  constructor(){
    super();
    this.state = {
      showModalWindow: false,
      items: []
    }
    this.handleShowModal = this.handleShowModal.bind(this);
    this.creatTodo = this.creatTodo.bind(this);
  }

  handleShowModal() {
    this.setState((prevState) => ({
      showModalWindow: !prevState.showModalWindow
    }))
  }

  creatTodo(todo) {
    this.setState((prevState) => ({
      items: [
        ...prevState.items,
        {
          id: Date.now(),
          done: false,
          ...todo
        },
      ]
    }))
  }

  render() {
    const { showModalWindow, items } = this.state;
    return (
      <>
        <HeadOfTodo 
          handleShowModal={this.handleShowModal}/>
        <ModalWindow 
          show={showModalWindow}
          handleShowModal={this.handleShowModal}
          creatTodo={this.creatTodo} />
        <TodoList todolist={items} />
      </>
    );
  }
}

export default Main;

