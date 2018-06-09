import 'babel-polyfill'
// @flow
import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import Header from 'components/Header/Header'
import SearchList from 'components/Search/SearchList'
import Footer from 'components/Footer/Footer'
import SideMenu from 'components/SideMenu'
import Sidebar from 'components/Sidebar/Sidebar'
// import Sidebar from 'react-side-bar'
import '../styles/normalize'
import LayoutMain from 'components/LayoutMain'

type State = {
  opend: boolean,
  posts: [],
  initialPosts: [],
  content: string,
  toggleRotate: boolean,
}

class Template extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      posts: [],
      initialPosts: [],
      content: '',
      toggleRotate: false,
    }
    this.Sidebar
  }

  handleSearchButton = () => {
    this.setState({
      toggleRotate: !this.state.toggleRotate,
    })
  }

  handleSearchInput = e => {
    const content = e.target.value
    const { initialPosts } = this.state
    const posts = initialPosts.filter(item => {
      let node = item.node.title.toLowerCase()
      let compare = content.toLowerCase()
      return node.includes(compare)
    })

    this.setState({
      content,
      posts,
    })
  }

  openSidebar = () => {
    this.setState({
      opened: true,
    })
  }

  closeSidebar = () => {
    this.setState({
      opened: false,
    })
  }

  componentDidMount() {
    const posts = this.props.data.allContentfulBlogPost.edges
    this.setState({
      posts,
      initialPosts: posts,
    })
  }

  render() {
    const { opened, posts, content, toggleRotate } = this.state
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="wrapper">
        <Sidebar
          opened={opened}
          onCloseSidebar={this.closeSidebar}
          bar={<SideMenu onCloseSidebar={this.closeSidebar} />}
        >
          <Header
            toggleRotate={toggleRotate}
            content={content}
            onHandleSearchInput={this.handleSearchInput}
            onHandleSearchButton={this.handleSearchButton}
            onOpenSidebar={this.openSidebar}
          />
          {toggleRotate && <SearchList posts={posts} />}
          <LayoutMain>{children()}</LayoutMain>
          <Footer />
        </Sidebar>
      </div>
    )
  }
}

export default Template

export const rootQuery = graphql`
  query RootQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          id
          categories
          publishDate
          tags
          heroImage {
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
