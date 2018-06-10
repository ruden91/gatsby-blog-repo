import React from 'react'
import styled from 'styled-components'

const StyledTechItem = styled.li`
  img {
    width: 150px;
    height: 150px;
  }
`
const TechItem = ({ name, image, onHandleSidebar }) => (
  <StyledTechItem onClick={() => onHandleSidebar(name)}>
    <img src={image} alt={name} />
  </StyledTechItem>
)

export default TechItem
