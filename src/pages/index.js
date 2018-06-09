import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './default.scss'
import ArticlePreview from '../components/article-preview'
import Filters from '../components/Filters/Filters'
import styled from 'styled-components'

const StyledArticlePreview = styled.ul``
const StyledGridCol3 = styled.li`
  float: left;
  width: 25%;
  padding-left: 35px;
  padding-bottom: 35px;
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  @media (max-width: 1461px) {
    width: 33.3333%;
  }

  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  @media (max-width: 1090px) {
    width: 50%;
    padding-bottom: 35px;
  }
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  @media (max-width: 468px) {
    width: 100%;
    padding-bottom: 23px;
  }
`
class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialPosts: [],
      posts: [],
      filters: [
        {
          name: '알고리즘',
          value: 'algorithm',
        },
        {
          name: 'HTML5',
          value: 'html5',
        },
        {
          name: '자바스크립트',
          value: 'javascript',
        },
        {
          name: 'CSS3',
          value: 'css3',
        },
      ],
      filter: '',
    }
  }
  componentDidMount() {
    this.setState({
      initialPosts: this.props.data.allContentfulBlogPost.edges,
      posts: this.props.data.allContentfulBlogPost.edges,
    })
  }
  handleFilterPost = filter => {
    const { initialPosts } = this.state
    const posts = initialPosts.filter(item => {
      return item.node.categories[0] === filter
    })

    this.setState({
      filter,
      posts,
    })
  }

  render() {
    const { transition } = this.props
    const { posts, filters } = this.state
    return (
      <section>
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <SEO postEdges={posts} />
        <Filters
          filters={this.state.filters}
          onHandleFilter={this.handleFilterPost}
        />
        <div className="container">
          <StyledArticlePreview className="article-list">
            {posts.map(({ node }) => {
              return (
                <StyledGridCol3 key={node.id}>
                  <ArticlePreview article={node} />
                </StyledGridCol3>
              )
            })}
          </StyledArticlePreview>
        </div>
      </section>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
            sizes(maxWidth: 1280) {
              ...GatsbyContentfulSizes
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
