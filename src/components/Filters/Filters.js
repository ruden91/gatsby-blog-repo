import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Filter from './Filter'
import FilterImage from 'images/filter.svg'
import './Filters.scss'
import styled from 'styled-components'
import { Clearfix } from 'styled/utils'
const StyledFilters = styled.ul`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  border-bottom: 1px solid #e6eaea;
  margin: 0;
  padding: 0;
  ${Clearfix};
`

const StyledFilter = styled.li`
  display: inline-block;
  vertical-align: top;
  border-right: 1px solid #e6eaea;
  cursor: pointer;
  margin: 0;
  font-size: 13px;

  img {
    width: 15px;
    height: 42px;
    display: inline-block;
    margin: 0 15px;
  }

  span {
    display: inline-block;
    line-height: 25px;
    padding: 10px;
  }
`

const StyledFilterComponent = StyledFilter.withComponent(Filter)
export default class Filters extends Component {
  mapComponent = () => {
    const { filters, onHandleFilter } = this.props
    return filters.map(filter => (
      <StyledFilter
        key={filter.key}
        onClick={() => onHandleFilter(filter.value)}
      >
        <span>{filter.name}</span>
      </StyledFilter>
    ))
  }

  render() {
    return (
      <StyledFilters>
        <StyledFilter>
          <img src={FilterImage} alt="필터이미지" />
        </StyledFilter>
        <StyledFilter>
          <span>Filter By</span>
        </StyledFilter>
        {this.mapComponent()}
      </StyledFilters>
    )
  }
}
