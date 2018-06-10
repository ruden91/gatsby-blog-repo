import React from 'react'
import styled from 'styled-components'
import { totalTech } from 'components/About/Tech/data'
import { find } from 'lodash'

const StyledTechDynamicComponent = styled.div`
  padding: 72px;
`
const StyledBadge = styled.div`
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  padding: 6px 16px;
  border: 1px solid #64ffda;
  color: #64ffda;
  display: inline-block;
  letter-spacing: 1px;
  text-transform: uppercase;
`
const TechDynamicComponent = ({ techName }) => {
  const item = find(totalTech, { name: techName })

  return (
    <StyledTechDynamicComponent>
      <header>
        <StyledBadge>{techName}</StyledBadge>
      </header>
      {item && item.component()}
    </StyledTechDynamicComponent>
  )
}

export default TechDynamicComponent
