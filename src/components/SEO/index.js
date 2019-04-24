import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import siteInfo from '../../utilities/config/siteInfo'
import siteImage from '../../Assets/siteImage.png'

function SEO(props) {
  const { titleText, ...restProps } = props

  const siteTitle = titleText ? `${titleText} | ${siteInfo.siteTitle}` : siteInfo.siteTitle

  return (
    <Helmet
      title={siteTitle}
     
      meta={[
        { charSet: "utf-8"},
        { name: 'description', content: siteInfo.siteDescription },
        { name: 'keywords', content: siteInfo.toolsList.concat(siteInfo.skillsList) },
        { name: "image", content:siteImage},
        { name: 'google-site-verification', content: 'PoixIz8vjc-yvhRCJWhiWPFUei1BCSj0pN28g2NZR9M' }

        // Google / Search Engine Tags
        { itemprop:"name" , content: siteTitle },
        { itemprop:"description" , content:siteInfo.siteDescription  },
        { itemprop:"image" , content:siteImage},

        // Facebook Meta Tags
        { property:"og:url", content: siteInfo.siteUrl },
        { property:"og:type", content:"website" },
        { property:"og:title", content:siteTitle },
        { property:"og:description", content:siteInfo.siteDescription },
        { property:"og:image", content:siteImage },

        // Twitter Meta Tags
        { name:"twitter:card", content:"summary_large_image" },
        { name:"twitter:title", content:siteTitle },
        { name:"twitter:description", content:siteInfo.siteDescription },
        { name:"twitter:image", content:siteImage },
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}

SEO.propTypes = {
  titleText: PropTypes.string,
}

SEO.defaultProps = {
  titleText: null,
}

export default SEO
