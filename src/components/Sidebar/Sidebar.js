import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBarContainer = styled.div`
  transition: all 0.3s ease-in-out;
  position: relative;
  left: ${props => (!props.opened ? 0 : '300px')};
`
const StyledBar = styled.aside`
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 0;
  width: 300px;
  background-color: #f4f7f6;
  height: 100vh;
  overflow: scroll;
  left: ${props => (props.opened ? 0 : '-300px')};
  z-index: 4;
`

const StyledBarContent = styled.div`
  overflow: hidden;
`

const StyledBarContentDim = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 0.35s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
`
export default class Sidebar extends Component {
  render() {
    const { bar, children, opened, onCloseSidebar } = this.props
    return (
      <StyledBarContainer opened={opened}>
        <StyledBar opened={opened}>{bar}</StyledBar>
        <StyledBarContent opened={opened}>
          {children}
          {opened && <StyledBarContentDim onClick={onCloseSidebar} />}
        </StyledBarContent>
      </StyledBarContainer>
    )
  }
}
