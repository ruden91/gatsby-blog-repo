import React, { Component } from 'react'
import Intro from 'components/About/Intro'
import styled from 'styled-components'
import ScrollAnim from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'
const ScrollOverPack = ScrollAnim.OverPack

const StyledAbout = styled.section`
  margin-top: 70px;
`
const StyledBox = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 50px;
  margin-right: 10px;
  height: 50px;
  border-radius: 4px;
  background: #019bf0;
`
console.log(ScrollAnim)
export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledAbout>
        <ScrollOverPack>
          <Intro />
        </ScrollOverPack>
        <ScrollOverPack style={{ height: 500 }}>
          <QueueAnim
            key="queue"
            leaveReverse
            style={{
              position: 'relative',
            }}
          >
            <StyledBox key="a" />
            <StyledBox key="b" />
            <StyledBox key="c" />
            <StyledBox key="d" />
            <StyledBox key="e" />
            <StyledBox key="f" />
          </QueueAnim>
        </ScrollOverPack>
        <ScrollOverPack style={{ height: 500 }}>
          <QueueAnim
            key="queue"
            leaveReverse
            style={{
              position: 'relative',
            }}
          >
            <StyledBox key="a" />
            <StyledBox key="b" />
            <StyledBox key="c" />
            <StyledBox key="d" />
            <StyledBox key="e" />
            <StyledBox key="f" />
          </QueueAnim>
          {/* <Intro />
          <p>개인 소개</p>
          <p>회사에서 했던 프로젝트</p>
          <p>관심 있는 것</p>
          <p>개인적으로 해본 것</p> */}
        </ScrollOverPack>
      </StyledAbout>
    )
  }
}
