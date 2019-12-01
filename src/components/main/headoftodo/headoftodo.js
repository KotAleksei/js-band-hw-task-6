import React, { Component } from 'react';
import DropDown from '../../helpers/dropdown';

class HeadOfTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openByDone: {
        open: true,
        name: 'openByDone'
      },
      openByPriority: {
        open: true,
        name: 'openByPriority'
      }
    }
    this.visibleChange.bind(this);
  }

  visibleChange(item) {
    this.setState((prevState) => ({
      [item.name]: {
        ...prevState[item.name],
        open: !prevState[item.name].open
      }
    }))
  }

  render() {
    const { openByDone, openByPriority } = this.state;
    return (
      <div className='d-flex justify-content-around mt-3'>
        <div>
          <input 
            type="search"
            placeholder="search by title"
            className="form-control" />
        </div>
        <DropDown 
          items={['all','open','done']}
          dropdownInf={openByDone}
          visibleToggle={this.visibleChange} />
        <DropDown 
          items={['all','hight','normal', 'low']} 
          dropdownInf={openByPriority} 
          visibleToggle={this.visibleChange} />
        <button
          className="btn btn-dark col-2 p-0"
          style={{height: '40px'}}
          type='button'
        > 
          Сreate 
        </button>
      </div>
    )
  }
}
export default HeadOfTodo;