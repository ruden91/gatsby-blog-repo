import React, { Component } from 'react'

export default class header extends Component {
  render() {
    const { onOpenSidebar } = this.props

    return (
      <header>
        <div className="header__left-box">
          <button onClick={onOpenSidebar}>
            <span className="ico-menu">
              <span />
              <span />
              <span />
            </span>
            <span className="menu-text">MENU</span>
          </button>
        </div>
        <div className="logo-header">
          <a href="#">FERuden</a>
        </div>
        <div className="header__right-box">
          <button className="header__search-button">S</button>
        </div>
      </header>
    )
  }
}
