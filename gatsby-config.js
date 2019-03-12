// import { siteInfo } from './src/utilities/config/siteInfo.js' 
// const siteInfo = require('./src/utilities/config/siteInfo.js');
// Future review https://github.com/greglobinski/gatsby-starter-personal-blog/blob/master/gatsby-config.js

const siteInfo = require("./src/utilities/config/siteInfo.js");

module.exports = {
  siteMetadata: {
    title: siteInfo.siteTitle,
    author: siteInfo.siteName,
    description: siteInfo.siteDescription,
    siteUrl: siteInfo.siteUrl,
    image: siteInfo.siteImage,
  },
  pathPrefix: '/portfolio',
  plugins: [
    // Google Fonts
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Quicksand`,
            variants: ['300','400','500','700']
          },
          {
            family: `IBM Plex Sans`,
            variants: ['100','300','400','500','600','700']
          },
        ],
      },
    },
    // Manifest 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteInfo.siteTitle,
        short_name: siteInfo.manifestShortName,
        start_url: siteInfo.pathPrefix,
        background_color: siteInfo.manifestBackgroundColor,
        theme_color: siteInfo.manifestThemeColor,
        display: siteInfo.manifestDisplay,
        icon: siteInfo.siteLogo,
        icons: [
          {
            src: "/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },   

 

    // FileSystem for content pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'pages',
      },
    },

    // FileSystem for image/pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/Assets/Images/SingleImages/`,
        name: 'pages',
      },
    },

    // Markdown Images
    {
      // resolve: `gatsby-transformer-remark`,
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // code blocks in markdown files (Work on it later)
          'gatsby-remark-prismjs',

          // Copies local files linked to/from markdown to your public folder.
          'gatsby-remark-copy-linked-files',

        ],
      },
    },

    // Markdown Sharp Image rendering
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,


    // HTML SEO Head
    `gatsby-plugin-react-helmet`,

    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteInfo.googleAnalyticsID,
      },
    }, 

    // Site work offline
    `gatsby-plugin-offline`,
    
    // Site map
    `gatsby-plugin-sitemap`
  ],
}
