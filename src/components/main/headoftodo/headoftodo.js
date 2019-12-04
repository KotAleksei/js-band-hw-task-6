import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../helpers/dropdown';
import sorted from '../sorted/sorted';

class HeadOfTodo extends Component {
  constructor() {
    super();
    this.state = {
      openByDone: {
        open: true,
        name: 'openByDone',
      },
      openByPriority: {
        open: true,
        name: 'openByPriority',
      },
      priority: 'all',
      completed: 'all',
      searchText: '',
    };
    this.visibleChange = this.visibleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchByTitle = this.searchByTitle.bind(this);
  }

  visibleChange(item) {
    this.setState(prevState => ({
      [item.name]: {
        ...prevState[item.name],
        open: !prevState[item.name].open,
      },
    }));
  }

  handleClick(e, name) {
    const { handleSorted } = this.props;
    const value = e.target.innerText;
    const sortBy = sorted({ [name]: value });
    this.setState({
      [name]: value,
    });
    handleSorted(sortBy);
  }

  searchByTitle(e) {
    const { handleSorted } = this.props;
    const { value } = e.target;
    const sortBy = sorted({ searchText: value });
    this.setState({
      searchText: value,
    });

    handleSorted(sortBy);
  }

  render() {
    const { openByDone, openByPriority, priority, completed } = this.state;
    const { handleShowModal } = this.props;
    const priorityItems = ['all', 'high', 'normal', 'low'];
    const doneItems = ['all', 'open', 'done'];
    return (
      <div className="d-flex justify-content-around mt-3">
        <div>
          <input
            type="search"
            placeholder="search by title"
            className="form-control"
            onChange={this.searchByTitle}
          />
        </div>
        <DropDown
          items={doneItems}
          dropdownInf={openByDone}
          visibleToggle={this.visibleChange}
          handleClick={e => this.handleClick(e, 'completed')}
          textValue={completed}
        />
        <DropDown
          items={priorityItems}
          dropdownInf={openByPriority}
          visibleToggle={this.visibleChange}
          handleClick={e => this.handleClick(e, 'priority')}
          textValue={priority}
        />
        <button
          className="btn btn-dark col-2 p-0"
          style={{ height: '40px' }}
          type="button"
          onClick={() => handleShowModal()}
        >
          Сreate
        </button>
      </div>
    );
  }
}

HeadOfTodo.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
  handleSorted: PropTypes.func.isRequired,
};

export default HeadOfTodo;
