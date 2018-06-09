import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import moment from 'moment'
import 'moment/locale/ko'
import styled from 'styled-components'
import { Clearfix, TextOverflow } from 'styled/utils'

const StyledArticlePreview = styled.div`
  background-color: #fff;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    margin-bottom: 10px;
    ${TextOverflow};
  }

  p {
    margin: 0;
    margin-bottom: 8px;
    padding: 0;
    font-weight: 300;
    font-size: 16px;
    ${TextOverflow};
  }
`

const StyledArticlePreviewLink = styled(Link)`
  color: #454545;
  text-decoration: none;
  > div {
    padding: 15px 15px 0 15px;
  }
`
const StyledArticlePreviewFooter = styled.footer`
  padding-top: 13px;
  padding-bottom: 13px;
  font-size: 12px;
  border-top: 1px solid #f4f7f6;
  p {
    float: left;
  }
  small {
    float: right;
    padding-top: 5px;
  }
  ${Clearfix};
`
export default ({ article }) => (
  <StyledArticlePreview>
    <StyledArticlePreviewLink to={`/blog/${article.slug}`}>
      <span className="image-wrap">
        <Img sizes={article.heroImage.sizes} alt={article.title} />
      </span>
      <div>
        <h3 className={styles.previewTitle}>{article.title}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
        <StyledArticlePreviewFooter>
          <p>
            BY <strong>RUDEN</strong>
          </p>
          <small>
            {moment(article.publishDate).format('YYYY-MM-DD (ddd)')}
          </small>
        </StyledArticlePreviewFooter>
      </div>
    </StyledArticlePreviewLink>
  </StyledArticlePreview>
)
