import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Clearfix } from 'styled/utils'
const StyledLogo = styled.h1`
  display: block;
  position: absolute;
  margin: 0;
  top: 21px;
  left: 50%;
  width: auto;
  height: 23px;
  line-height: normal;
  transform: translateX(-50%);
  border: none;

  .logo-text {
    li {
      position: relative;
      float: left;
      font-weight: 700;
      font-size: 1.3em;
      opacity: 1;
      transition: all 0.5s ease-in-out;
      max-width: 2em;
      &.ghost {
        ${props => props.scroll === 'down' && 'opacity: 0;max-width: 0;'};
      }

      > span {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #222;
        border-radius: 50%;
        margin-bottom: 1px;
        margin-left: 2px;
      }
    }
    ${Clearfix};
  }
`
const StyledLogoLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #212121;
  font-size: 23px;
  &:hover {
    border: none;
    text-decoration: none;
  }
`

export default class Logo extends Component {
  constructor() {
    super()

    this.state = {
      scroll: 'up',
    }
  }
  componentDidMount() {
    let prevScroll = window.pageYOffset | document.body.scrollTop
    window.addEventListener('scroll', () => {
      const scroll = window.pageYOffset | document.body.scrollTop
      if (scroll > prevScroll) {
        // down
        this.setState({
          scroll: 'down',
        })
      } else {
        // up
        this.setState({
          scroll: 'up',
        })
      }

      prevScroll = scroll
    })
  }

  render() {
    return (
      <StyledLogo scroll={this.state.scroll}>
        <StyledLogoLink to="/">
          <ul className="logo-text">
            <li>F</li>
            <li>E</li>
            <li className="ghost">R</li>
            <li className="ghost">u</li>
            <li className="ghost">d</li>
            <li className="ghost">e</li>
            <li className="ghost">n</li>
            <li>
              <span />
            </li>
          </ul>
        </StyledLogoLink>
      </StyledLogo>
    )
  }
}
