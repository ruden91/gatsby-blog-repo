import React, { Component } from 'react'
import Intro from 'components/About/Intro'
import Tech from 'components/About/Tech'
import styled from 'styled-components'
import ScrollAnim from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'
import UserRepos from 'components/GithubRepos/UserRepos'
import CalendarHeatmap from 'react-calendar-heatmap'
import quoteImage from 'images/quote.svg'
import githubImage from 'images/devicon/github.svg'
import './About.scss'
const ScrollOverPack = ScrollAnim.OverPack
const ScrollParallax = ScrollAnim.Parallax
const StyledAbout = styled.section`
  margin-top: 70px;

  h2 {
    border-bottom: none;
  }
`
const StyledGithubImage = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 35%;
  left: 0;
  transform: translateY(-50%) rotateY(-18deg) rotateZ(-23deg);
  display: block;
`
const StyledContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 30px 0;

  h2 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 50px;
    color: #4d5d75;
    font-weight: 300;
    font-size: 28px;
    span {
      &:before,
      &:after {
        content: '';
        display: inline-block;
        background-image: url(${quoteImage});
        width: 15px;
        height: 15px;
        background-size: cover;
        background-position: 50% 50%;
        position: relative;
      }
      &:before {
        top: -11px;
        left: -7px;
      }
      &:after {
        transform: rotate(180deg);
        top: -11px;
        left: 7px;
      }
    }
  }
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

const StyledCalendarHeatmap = styled.div`
  padding: 0 50px;
`
export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: '',
      endDate: '',
      data: [],
    }

    this.fetchGithubCalendarData = this.fetchGithubCalendarData.bind(this)
  }
  componentDidMount() {
    this.fetchGithubCalendarData()
  }
  async fetchGithubCalendarData() {
    try {
      let data = []
      let res = await fetch(
        'https://urlreq.appspot.com/req?method=GET&url=https://github.com/ruden91'
      )
      let body = await res.text()
      let div = document.createElement('div')
      div.innerHTML = body
      let cal = div.querySelector('.js-contribution-graph')
      let dataSet = cal.querySelectorAll('svg.js-calendar-graph-svg g g')
      for (let i = 0; i < dataSet.length; i++) {
        for (let j = 0; j < dataSet[i].children.length; j++) {
          const date = dataSet[i].children[j].dataset.date
          const count = parseInt(dataSet[i].children[j].dataset.count)
          data.push({
            date,
            count,
          })
        }
      }
      this.setState({
        data,
      })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const { onHandleSidebar } = this.props
    const { data } = this.state
    console.log(data)
    return (
      <StyledAbout>
        {/* 자기 소개*/}
        <ScrollOverPack>
          <Intro />
        </ScrollOverPack>
        <StyledContainer>
          {/* 기술스텍 소개 */}
          <ScrollOverPack>
            <Tech onHandleSidebar={onHandleSidebar} />
          </ScrollOverPack>
          <ScrollParallax
            animation={{ opacity: 1 }}
            style={{ opacity: 0, paddingTop: 60, position: 'relative' }}
          >
            <StyledGithubImage src={githubImage} alt="깃허브 이미지" />
            {data.length > 0 && (
              <StyledCalendarHeatmap>
                <CalendarHeatmap
                  startDate={data[0].date}
                  endDate={data[data.length - 1].date}
                  values={data}
                  classForValue={value => {
                    if (!value || value.count === 0) {
                      return 'color-empty'
                    }

                    if (value.count < 10) {
                      return `color-scale-1`
                    }

                    if (value.count < 20) {
                      return `color-scale-2`
                    }

                    if (value.count < 30) {
                      return `color-scale-3`
                    }

                    return 'color-scale-4'
                  }}
                />
              </StyledCalendarHeatmap>
            )}
          </ScrollParallax>
          <UserRepos />
        </StyledContainer>
      </StyledAbout>
    )
  }
}
