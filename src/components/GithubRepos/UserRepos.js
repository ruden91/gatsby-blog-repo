import React, { Component } from 'react'
import axios from 'axios'
import ScrollAnim from 'rc-scroll-anim'
import styled from 'styled-components'
import QueueAnim from 'rc-queue-anim'
const ScrollOverPack = ScrollAnim.OverPack
import { Clearfix, TextOverflow } from 'styled/utils'
import repoIcon from 'images/repo-icon.svg'
import starIcon from 'images/star.svg'
console.log(repoIcon)
const StyledContainer = styled.div`
  ${Clearfix};
  padding-left: 30px;
`

const StyledRepo = styled.div`
  width: 33%;
  float: left;
  padding: 15px 15px 0 0;
  > div {
    position: relative;
    border: 1px #e1e4e8 solid;
    height: 115px;
    overflow: hidden;
    border-radius: 3px;
    padding: 16px;
    a {
      color: #0366d6;
      ${TextOverflow};
      font-size: 14px;
      font-weight: 600;
      img {
        width: 15px;
        display: inline-block;
        position: relative;
        margin: 0;
        top: 3px;
        margin-right: 7px;
      }
      span {
        display: inline-block;
      }
    }
    p {
      color: #586069;
      font-size: 12px;
      ${TextOverflow};
      span {
        margin-left: 20px;
      }
      &:nth-of-type(1) {
        margin-top: 10px;
      }
      &:nth-of-type(2) {
        position: absolute;
        bottom: 0;
      }
      img {
        width: 11px;
        display: inline-block;
        position: relative;
        margin: 0;
        top: 1px;
        margin-right: 5px;
      }
    }
  }
`
export default class UserRepos extends Component {
  constructor(props) {
    super(props)
    this.apiRoot = 'https://api.github.com/users'
    this.fetchGithubReposData = this.fetchGithubReposData.bind(this)

    this.state = {
      repos: [],
    }
  }

  async fetchGithubReposData() {
    try {
      let address = `${this.apiRoot}/ruden91/repos?sort=pushed`
      if (this.props.clientId && this.props.clientSecret) {
        address += `?client_id=${this.props.clientId}&client_secret=${
          this.props.clientSecret
        }`
      }
      const response = await axios(address)
      const repos = await response.data

      this.setState({
        repos,
      })
      localStorage.setItem('items', JSON.stringify(repos))
    } catch (err) {
      console.error(err.message)
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('items')) {
      this.fetchGithubReposData()
    } else {
      this.setState({
        repos: JSON.parse(localStorage.getItem('items')).slice(0, 20),
      })
    }
  }
  render() {
    return (
      <StyledContainer>
        <ScrollOverPack>
          <QueueAnim
            key="queue"
            leaveReverse
            duration="150"
            style={{
              position: 'relative',
              minHeight: '950px',
              paddingTop: '50px',
            }}
          >
            <h2 key="0">
              <span>
                개인 프로젝트를 꾸준히 하며<br />개발 역량을 키우는 중입니다.
              </span>
            </h2>
            {this.state.repos.map((item, index) => (
              <StyledRepo key={index + 1}>
                <div>
                  <span>
                    <a href={item.html_url} target="_blank">
                      <img src={repoIcon} alt="repo-icon" />
                      <span>{item.name}</span>
                    </a>
                  </span>
                  <p>{item.description}</p>
                  <p>
                    {item.language}
                    <span>
                      <img src={starIcon} alt="star icon" />
                      {item.stargazers_count}
                    </span>
                  </p>
                </div>
              </StyledRepo>
            ))}
          </QueueAnim>
        </ScrollOverPack>
      </StyledContainer>
    )
  }
}
