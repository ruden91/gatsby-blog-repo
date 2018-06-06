import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../../data/SiteConfig'

export default class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props
    let title
    let description
    let image
    let postURL
    if (postSEO) {
      description = postNode.title
      title = postNode.title
      image = `https:${postNode.heroImage.sizes.src}`
      postURL = config.siteUrl + config.pathPrefix + postPath
    } else {
      title = config.siteTitle
      description = config.siteDescription
      image = config.siteLogo
    }

    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const blogURL = config.siteUrl + config.pathPrefix

    const schemaOrgJSONLD = [
      {
        '@context': 'https://ruden91.github.io',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ]

    if (postSEO) {
      schemaOrgJSONLD.push([
        {
          '@context': 'https://ruden91.github.io',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'https://ruden91.github.io',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        },
      ])
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ''}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}
