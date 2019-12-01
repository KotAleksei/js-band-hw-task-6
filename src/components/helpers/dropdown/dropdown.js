import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Dropdown (props) {
  const { items, dropdownInf, visibleToggle } = props;
  return (
    <div className={dropdownInf.open ? 'dropdownList open' : 'dropdownList'} >
      <button type='button' onClick={() => visibleToggle(dropdownInf)}>all</button>
      <ul>
        { items.map((item) => <li key={item}>{item}</li>) }
      </ul>
    </div>
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropdownInf: PropTypes.shape({
    open: PropTypes.bool,
    name: PropTypes.string
  }).isRequired,
  visibleToggle: PropTypes.func.isRequired,
};

export default Dropdown;