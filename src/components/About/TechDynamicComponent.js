import React from 'react'
import styled from 'styled-components'
import { totalTech } from 'components/About/Tech/data'
import { find } from 'lodash'
import cancelImage from 'images/cancel.png'
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
const StyledTechContent = styled.div`
  h2 {
    font-weight: 300;
    color: white;
    margin-top: 8vh;
    line-height: 45px;
    font-size: 30px;
    border-bottom: none;
    position: relative;
    &:after {
      content: '';
      margin-top: 50px;
      display: block;
      position: absolute;
      width: 60px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.16);
    }
  }

  h3 {
    font-weight: 300;
    color: #fff;
  }

  a {
    color: #fff;
    display: inline-block;
    margin-right: 10px;
  }
  div {
    margin-top: 80px;

    ul {
      li {
        margin-bottom: 15px;

        ul {
          margin: 0;
          padding: 0;
          display: inline-block;
          position: relative;
          top: 7px;
          li {
            margin: 0;
            display: inline-block;
            img {
              position: relative;
              width: 30px;
            }
            &:last-child {
              &:after {
                content: none;
              }
            }
            &:after {
              content: '';
              background-image: url(${cancelImage});
              margin: 0 10px;
              width: 10px;
              background-size: cover;
              height: 10px;
              font-weight: 300;
              display: inline-block;
              position: relative;
              top: -8px;
            }
          }
        }
      }
    }
  }
`

const TechDynamicComponent = ({ techName }) => {
  const item = find(totalTech, { name: techName })

  return (
    <StyledTechDynamicComponent>
      <header>
        <StyledBadge>{techName}</StyledBadge>
      </header>
      <StyledTechContent>{item && item.component()}</StyledTechContent>
    </StyledTechDynamicComponent>
  )
}

export default TechDynamicComponent
