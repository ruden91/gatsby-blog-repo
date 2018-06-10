import React from 'react'

const TechItem = ({ name, image, onHandleSidebar }) => (
  <li onClick={() => onHandleSidebar(name)}>
    <img src={image} alt={name} />
  </li>
)

export default TechItem
