import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../helpers/dropdown';
import './style.css';

class ModalWindow extends Component {
  constructor(){
    super();
    this.state = {
      openByPriority: {
        name: 'openByPriority',
        open: true
      },
      title: '',
      description: '',
      priority: 'high'
    }

    this.visibleToggle = this.visibleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetData = this.resetData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  visibleToggle(item) {
    this.setState((prevState) => ({
      [item.name]: {
        ...prevState[item.name],
        open: !prevState[item.name].open
      }
    }));
  }

  handleCancel() {
    const { handleShowModal } = this.props;

    handleShowModal()
    this.resetData();
  }

  handleClick(e) {
    this.setState({
      priority: e.target.innerText
    });
  }

  handleSubmit(event) {
    const { handleShowModal, creatTodo } = this.props;
    const { title, description, priority } = this.state;
    event.preventDefault();
    creatTodo({ title, description, priority });
    
    this.resetData();
    handleShowModal();
  }

  resetData() {
    this.setState({
      title: '',
      description: '',
      priority: 'high'
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
    const { openByPriority, title, description, priority } = this.state;
    const { show } = this.props;
    const priorityItems = ['high', 'normal', 'low'];
    return (
      <div className={show ? "modalWindow show" : "modalWindow"}>
        <form className="createTodoContent" onSubmit={this.handleSubmit}>
        <label >
          Title:
            <input 
              type="text" 
              placeholder="Title" 
              title="please fill this field"
              className="form-control"
              value={title}
              onChange={this.handleChange}
              required />
        </label>
          <label >
            Description:
            <div>
              <textarea 
                placeholder="Description"
                className="form-control"
                value={description}
                onChange={this.handleChange} />
            </div>
          </label>
          <p>Priority: </p>
          <Dropdown 
            items={priorityItems}
            dropdownInf={openByPriority} 
            visibleToggle={this.visibleToggle}
            handleClick={this.handleClick}
            textValue={priority}
          />
          <div className="btnGroup">
              <button 
                type='button'
                className="btn btn-outline-danger"
                onClick={this.handleCancel}>
                  Cancel
              </button>
              <button type="submit" className="btn btn-outline-success">Save</button>
          </div>
        </form>
      </div>
      );
  }
}

ModalWindow.defaultProps = {
  creatTodo: PropTypes.func
}

ModalWindow.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  creatTodo: PropTypes.func
}

export default ModalWindow;