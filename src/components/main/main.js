import React, { Component } from 'react';
import HeadOfTodo from './headoftodo';
import ModalWindow from './modalwindow';
import TodoList from './todolist/todolist';

class Main extends Component{
  constructor(){
    super();
    this.state = {
      showModalWindow: false,
      items: [],
      title: '',
      description: '',
      priority: 'high',
      edit: false,
      id: null
    }

    this.handleShowModal = this.handleShowModal.bind(this);
    this.creatTodo = this.creatTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetData = this.resetData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }


  handleShowModal() {
    this.setState((prevState) => ({
      showModalWindow: !prevState.showModalWindow
    }));
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
    }));
    this.handleShowModal();
  }
  
  editTodo(todo){
    const { 
      items,
      title, 
      description, 
      priority
    } = this.state;

    this.setState({
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      id: todo.id,
      edit: true,
      items: items.map((todoItem) => {
        const newItem = { ...todoItem };
        if(todoItem.id === todo.id) {
          newItem.title = title || todo.title;
          newItem.description = description || todo.description;
          newItem.priority = priority || todo.priority;
        }
        return newItem;
      })
    });
    
    this.handleShowModal();
  }

  toggleDone(todo) {
    this.setState((prevState) => ({
      items: prevState.items.map((todoItem) => {
        const newItem = { ...todoItem };
        if(todoItem.id === todo.id){
          newItem.done = !todo.done
        }
        return newItem;
      })
    }))
  }

  deleteTodo(todo) {
    const { items } = this.state;
    this.setState({
      items: items.filter((todoItem) => todoItem.id !== todo.id)
    })
  }

  handleCancel() {
    this.handleShowModal()
    this.resetData();
  }

  handleClick(e) {
    this.setState({
      priority: e.target.innerText
    });
  }

  handleSubmit(event) {
    const { edit, title, description, priority, id } = this.state;
    event.preventDefault();
    if(!edit) {
      this.creatTodo({title, description, priority});
    } else {
      this.editTodo({ title, description, priority, id });
    }

    this.resetData();
  }

  resetData() {
    this.setState({
      title: '',
      description: '',
      priority: 'high', 
      edit: false,
      id: null
    })
  }

  handleChange(e) {
    const target = e.target.tagName;
    const name = target === "INPUT" ? 'title' : 'description';
    const {value} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { showModalWindow, items, title, description, priority } = this.state;
    return (
      <>
        <HeadOfTodo 
          handleShowModal={this.handleShowModal} />
        <ModalWindow 
          show={showModalWindow}
          handleShowModal={this.handleShowModal}
          creatTodo={this.creatTodo} 
          title={title}
          description={description}
          priority={priority}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit} 
        />
        <TodoList 
          todolist={items}
          editTodo={this.editTodo}
          toggleDone={this.toggleDone}
          deleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default Main;

