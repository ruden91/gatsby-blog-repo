import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import About from '../components/About/About'
import Sidebar from 'components/Sidebar/Sidebar'
import TechDynamicComponent from 'components/About/TechDynamicComponent'
console.log(TechDynamicComponent)
export default class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      techName: '',
    }
  }
  handleSidebar = techName => {
    const { opened } = this.state
    if (typeof techName === 'string') {
      this.setState({
        techName,
      })
    }
    this.setState({
      opened: !opened,
    })
  }

  handleDynamicComponent = techName => {
    console.log(`${techName} dynamic component`)
  }

  render() {
    const { opened, techName } = this.state
    return (
      <div>
        <Sidebar
          bar={<TechDynamicComponent techName={techName} />}
          opened={opened}
          onCloseSidebar={this.handleSidebar}
          dimStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            zIndex: 4,
          }}
          style={{
            width: '75%',
            backgroundColor: '#3a4961',
            zIndex: 5,
            boxShadow:
              '0 16px 32px 0 rgba(0, 0, 0, 0.07), 0 5px 4px 0 rgba(0, 0, 0, 0.24), 0 8px 20px 0 rgba(0, 0, 0, 0.2)',
          }}
        />
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <SEO />
        <About onHandleSidebar={this.handleSidebar} />
      </div>
    )
  }
}
