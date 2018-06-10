require('dotenv').config()
const config = require('./data/SiteConfig')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
let contentfulConfig

try {
  // contentfulConfig = require('./.contentful')
  contentfulConfig = {
    spaceId: 'hu4faubeotg0',
    accessToken:
      '98beb767cc8236512e0585eb3063ccc48d6e69894845851743a3f60e2a60b358',
  }
} catch (_) {
  contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig

  if (!spaceId || !accessToken) {
    throw new Error(
      'Contentful spaceId and the delivery token need to be provided.'
    )
  }
}

const query = `{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts|pages/[0-9]+.*--/"}}) {
    edges {
      node {
        objectID: fileAbsolutePath
        fields {
          slug
        }
        internal {
          content
        }
        frontmatter {
          title
        }
      }
    }
  }
}`

const queries = [
  {
    query,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => node),
  },
]

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      // site_url: config.siteUrl + pathPrefix,
      // feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      // image_url: `${config.siteUrl + pathPrefix}/logos/logo-512.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets/,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'FERuden',
        short_name: 'FERuden',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
