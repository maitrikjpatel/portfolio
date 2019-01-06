// import { siteInfo } from './src/utils/config/siteInfo.js' 
// const siteInfo = require('./src/utils/config/siteInfo.js');
// Future review https://github.com/greglobinski/gatsby-starter-personal-blog/blob/master/gatsby-config.js

const siteInfo = require("./src/utils/config/siteInfo.js");

module.exports = {
  siteMetadata: {
    title: siteInfo.siteTitle,
    author: siteInfo.siteName,
    description: siteInfo.siteDescription,
    siteUrl: siteInfo.siteUrl,
  },
  pathPrefix: '/portfolio',
  plugins: [
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
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
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

    // HTML SEO Head (Work on it later)
    `gatsby-plugin-react-helmet`,

    // Typography
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },

    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },

    // MDX 
    // {
    //   resolve: `gatsby-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md"]
    //   }
    // },

    // Google Source FileSystem for image/pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'pages',
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
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


          // Replaces “dumb” punctuation marks with “smart” 
          // 'gatsby-remark-smartypants',
        ],
      },
    },

    // Markdown Sharp Image rendering
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Site work offline (Work on it later)
    // `gatsby-plugin-offline`,
    
    // {
    //   resolve: `gatsby-plugin-sitemap`
    // },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     include: /svg-icons/
    //   }
    // }
  ],
}
