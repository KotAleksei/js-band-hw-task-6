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
      },
    }

    this.visibleToggle = this.visibleToggle.bind(this);
  }

  visibleToggle(item) {
    this.setState((prevState) => ({
      [item.name]: {
        ...prevState[item.name],
        open: !prevState[item.name].open
      }
    }));
  }


  render() {
    const { openByPriority } = this.state;
    const { 
      show, 
      title, 
      description, 
      priority,
      handleChange,
      handleClick,
      handleCancel,
      handleSubmit
    } = this.props;
    const priorityItems = ['high', 'normal', 'low'];
    return (
      <div className={show ? "modalWindow show" : "modalWindow"}>
        <form 
          className="createTodoContent" 
          onSubmit={handleSubmit}>
          <label >
            Title:
              <input 
                type="text" 
                placeholder="Title" 
                title="please fill this field"
                className="form-control"
                value={title}
                onChange={handleChange}
                required />
          </label>
          <label >
            Description:
            <div>
              <textarea 
                placeholder="Description"
                className="form-control"
                value={description}
                onChange={handleChange} />
            </div>
          </label>
          <p>Priority: </p>
          <Dropdown 
            items={priorityItems}
            dropdownInf={openByPriority} 
            visibleToggle={this.visibleToggle}
            handleClick={handleClick}
            textValue={priority}
          />
          <div className="btnGroup">
              <button 
                type='button'
                className="btn btn-outline-danger"
                onClick={handleCancel}>
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
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default ModalWindow;