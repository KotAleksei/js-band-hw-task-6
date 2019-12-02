import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../helpers/dropdown';

class HeadOfTodo extends Component {
  constructor() {
    super();
    this.state = {
      openByDone: {
        open: true,
        name: 'openByDone'
      },
      openByPriority: {
        open: true,
        name: 'openByPriority'
      },
      priority: 'all',
      show: 'all'
    }
    this.visibleChange = this.visibleChange.bind(this);
    this.handleClickPriority = this.handleClickPriority.bind(this);
    this.handleClickShow = this.handleClickShow.bind(this);
  }

  visibleChange(item) {
    this.setState((prevState) => ({
      [item.name]: {
        ...prevState[item.name],
        open: !prevState[item.name].open
      }
    }))
  }

  handleClickPriority(e) {
    this.setState({
      priority: e.target.innerText
    });
  }

  handleClickShow(e) {
    this.setState({
      show: e.target.innerText
    });
  }

  render() {
    const { openByDone, openByPriority, priority, show } = this.state;
    const { handleShowModal } = this.props;
    const priorityItems = ['all', 'hight', 'normal', 'low'];
    const doneItems = ['all','open','done'];
    return (
      <div className='d-flex justify-content-around mt-3'>
        <div>
          <input 
            type="search"
            placeholder="search by title"
            className="form-control" />
        </div>
        <DropDown 
          items={doneItems}
          dropdownInf={openByDone}
          visibleToggle={this.visibleChange}
          handleClick={this.handleClickShow}
          textValue={show} />
        <DropDown 
          items={priorityItems} 
          dropdownInf={openByPriority} 
          visibleToggle={this.visibleChange}
          handleClick={this.handleClickPriority}
          textValue={priority} />
        <button
          className="btn btn-dark col-2 p-0"
          style={{height: '40px'}}
          type='button'
          onClick={() => handleShowModal()}
        > 
          Сreate 
        </button>
      </div>
    )
  }
}

HeadOfTodo.propTypes = {
  handleShowModal: PropTypes.func.isRequired
}

export default HeadOfTodo;