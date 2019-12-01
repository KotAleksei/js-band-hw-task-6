import React, { Component } from 'react';
import HeadOfTodo from './headoftodo';
import ModalWindow from './modalwindow/modalwindow';

class Main extends Component{
  constructor(){
    super();
    this.state = {
      showModalWindow: false
    }
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleShowModal() {
    this.setState((prevState) => ({
      showModalWindow: !prevState.showModalWindow
    }))
  }

  render() {
    const { showModalWindow } = this.state;
    return (
      <>
        <HeadOfTodo 
          handleShowModal={this.handleShowModal}/>
        <ModalWindow 
          show={showModalWindow}
          handleShowModal={this.handleShowModal} />
      </>
    );
  }
}

export default Main;

