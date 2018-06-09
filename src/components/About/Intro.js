import React from 'react'
import styled from 'styled-components'
import QueueAnim from 'rc-queue-anim'
import myProfileImage from './images/my-profile.jpg'
const StyledIntro = styled.article`
  position: relative;
  height: calc(100vh - 70px);
  background-image: url(${myProfileImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  h1,
  h2 {
    border-bottom: none;
    color: #fff;
    letter-spacing: 1px;
    font-size: 2em;
    line-height: 46px;
    text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.75);
    transform: translate(0px, 0px);
  }
  p {
    color: #fff;
    line-height: 25px;
    text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.75);
  }
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const StyledIntroContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  max-width: 450px;
  left: 40px;
`
const Intro = () => (
  <StyledIntro>
    <StyledIntroContent>
      <QueueAnim>
        <h1 key="a">
          Front-end Developer<br />박경두
        </h1>

        <p key="b">
          모던 웹 개발과 데이터 시각화에 많은 관심을 가지고 있습니다.
          <br />
          일상의 불편함이 존재할 때 직접 개발하여 문제를 해결하는 것을 좋아하고,
          늘 좀 더 나은 방향을 찾기 위해 많은 고민을 하며 개발을 하고 있습니다.
          단순 데이터를 차트로 시각화함으로써 사용자에게 쉽고 유익하게 정보를
          제공하는데에 많은 재미를 느끼고 있습니다.
        </p>
      </QueueAnim>
    </StyledIntroContent>
  </StyledIntro>
)

export default Intro
