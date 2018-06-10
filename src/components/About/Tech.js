import React from 'react'
import styled from 'styled-components'
import ScrollAnim from 'rc-scroll-anim'
import WordCloudChart from 'components/Charts/WordCloudChart'
import { Clearfix } from 'styled/utils'
import { coreTech, subTech } from 'components/About/Tech/data'
import TechItem from 'components/About/TechItem'
import QueueAnim from 'rc-queue-anim'
const ScrollParallax = ScrollAnim.Parallax

const StyledSolidBg = styled.div`
  height: 700px;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  transform: skewy(-10deg) translate3d(0, -18%, 0);
  z-index: -1;
`

const StyledWordDumy = styled.div`
  width: 320px;
  height: 320px;
  margin: 0 auto;
  background-color: #414141;
`

const StyledTech = styled.div`
  ul {
    li {
      float: left;
      width: 33%;
      text-align: center;
      margin-bottom: 30px;
    }
    ${Clearfix};
  }
`

const Tech = ({ onHandleSidebar }) => (
  <StyledTech>
    <StyledSolidBg />
    <h2>
      <span>실무에서 활용하고 있는 기술스펙</span>
    </h2>
    <ScrollParallax
      animation={{ x: 0, opacity: 1 }}
      always={false}
      style={{
        transform: 'translateX(-200px)',
        opacity: 0,
      }}
    >
      <ul>
        {coreTech.map(item => (
          <TechItem
            {...item}
            onHandleSidebar={onHandleSidebar}
            key={item.name}
          />
        ))}
      </ul>
    </ScrollParallax>
    <ScrollParallax
      animation={{ opacity: 1 }}
      style={{ opacity: 0, paddingTop: 60 }}
    >
      <h2>
        <span>
          개인적으로 관심을 갖고 <br />학습하고 있는 기술입니다.
        </span>
      </h2>
      <ul>
        {subTech.map(item => (
          <TechItem
            {...item}
            onHandleSidebar={onHandleSidebar}
            key={item.name}
          />
        ))}
      </ul>
    </ScrollParallax>
  </StyledTech>
)

export default Tech
