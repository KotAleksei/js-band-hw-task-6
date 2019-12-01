import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../helpers/dropdown';
import './style.css';

class ModalWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      openByPriority: {
        name: 'openByPriority',
        open: true
      }
    }
    this.visibleToggle = this.visibleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  visibleToggle(item) {
    this.setState((prevState) => ({
      [item.name]: {
        ...prevState[item.name],
        open: !prevState[item.name].open
      }
    }));
  }

  handleSubmit(event) {
    const { handleShowModal } = this.props;
    event.preventDefault();
    handleShowModal();
  }

  render() {
    const { openByPriority } = this.state;
    const { show, handleShowModal } = this.props;
    return (
      <div className={show ? "modalWindow show" : "modalWindow"}>
        <form className="createTodoContent" onSubmit={this.handleSubmit}>
        <label >
          Title:
            <input 
            type="text" 
            placeholder="Title" 
            title="please fill this field"
            className="form-control" />
        </label>
          <label >
            Description:
            <div>
                <textarea 
                  placeholder="Description"
                  className="form-control" />
            </div>
          </label>
          <Dropdown 
            items={['high', 'normal', 'low']}
            dropdownInf={openByPriority} 
            visibleToggle={this.visibleToggle}
          />
          <div className="btnGroup">
              <button 
                type='button'
                className="btn btn-outline-danger"
                onClick={() => handleShowModal()}>
                  Cancel
              </button>
              <button type="submit" className="btn btn-outline-success">Save</button>
          </div>
        </form>
      </div>
      );
  }
}

ModalWindow.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default ModalWindow;