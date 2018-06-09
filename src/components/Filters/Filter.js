import React from 'react'

const Filter = ({ value, name, onHandleFilter }) => (
  <li className="filter-by" onClick={() => onHandleFilter(value)}>
    <a href="javascript:;">{name}</a>
  </li>
)

export default Filter
