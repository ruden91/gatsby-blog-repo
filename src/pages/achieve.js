import React from 'react'
import config from '../../data/SiteConfig'
import SEO from '../components/SEO/SEO'
import Link from 'gatsby-link'
import { get, uniq, map } from 'lodash'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'
import { filter } from 'minimatch'
import Img from 'gatsby-image'
import styled from 'styled-components'
import randomColor from 'randomcolor'

const StyledContainer = styled.section`
  position: relative;
  max-width: 1773px;
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 35px;
  padding-left: 20px;
  padding-right: 20px;
  h2 {
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
  }
`
const StyledPost = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  div {
    height: 100%;
  }
  img {
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.bgColor};
    opacity: 0.7;
    z-index: 1;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 2;
    text-align: center;
    width: 150px;
  }
`
class AchieveIndex extends React.Component {
  getAchieveItems = () => {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    let categories = uniq(map(posts, item => item.node.categories[0]))

    return map(categories, item => ({
      title: item,
      items: posts.filter(data => data.node.categories[0] === item),
    }))
  }
  mapComponent = () => {
    const posts = this.getAchieveItems()
    const params = {
      lazy: true,
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      slidesPerView: 4,
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        490: {
          slidesPerView: 1,
        },
      },
    }

    return posts.map((item, parentIndex) => {
      return (
        <div key={parentIndex}>
          <h2>{item.title}</h2>
          <Swiper {...params}>
            {item.items.map((data, index) => {
              return (
                <div key={index}>
                  <Link to={`/blog/${data.node.slug}`}>
                    <StyledPost bgColor={randomColor({ luminosity: 'dark' })}>
                      <Img
                        sizes={data.node.heroImage.sizes}
                        alt={data.node.title}
                      />
                      <p>{data.node.title}</p>
                    </StyledPost>
                  </Link>
                </div>
              )
            })}
          </Swiper>
        </div>
      )
    })
  }

  render() {
    const posts = this.getAchieveItems()
    console.log(config)
    return (
      <StyledContainer>
        <Helmet>
          <title>Achieve | {config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}/achieve/`} />
        </Helmet>
        <SEO />
        <div>{this.mapComponent()}</div>
      </StyledContainer>
    )
  }
}

export default AchieveIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
