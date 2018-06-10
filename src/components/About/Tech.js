import React from 'react'
import styled from 'styled-components'
import ScrollAnim from 'rc-scroll-anim'
import WordCloudChart from 'components/Charts/WordCloudChart'
import { Clearfix } from 'styled/utils'
import { coreTech, subTech } from 'components/About/Tech/data'
import TechItem from 'components/About/TechItem'
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
    max-width: 960px;
    margin: 0 auto;
    li {
      float: left;
      width: 33%;
      text-align: center;
    }
    ${Clearfix};
  }
`

const Tech = ({ onHandleSidebar }) => (
  <StyledTech>
    <StyledSolidBg />
    <ScrollParallax
      animation={{ opacity: 1 }}
      style={{ opacity: 0, paddingTop: 60 }}
    >
      <h2>대표 기술</h2>
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
      <h2>관심을 갖고 있는 기술</h2>
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
