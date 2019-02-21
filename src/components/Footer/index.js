import React from 'react'
import styles from './Footer.module.css'

function Footer(props) {
  const { ...restProps } = props

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerLinks}>
        <li className="twitter">
          <a href="https://twitter.com/maitrikjpatel" target="_blank" rel="noopener">
            Twitter
          </a>
        </li>
        <li className="linkedin">
          <a href="https://www.linkedin.com/in/maitrikpatel/" target="_blank" rel="noopener">
            Linkedin
          </a>
        </li>
        <li className="github">
          <a href="https://github.com/maitrikjpatel/" target="_blank" rel="noopener">
            Github
          </a>
        </li>
        <li className="dribbble">
          <a href="https://dribbble.com/maitrikjpatel" target="_blank" rel="noopener">
            Dribbble
          </a>
        </li>
        <li className="Unsplash">
          <a href="https://unsplash.com/@maitrikjpatel/" target="_blank" rel="noopener">
            Unsplash
          </a>
        </li>
        {/* <li className="Codepen">
          <a href="https://www.instagram.com/maitrikjpatel/" target="_blank" rel="noopener">
            Codepen
          </a>
        </li>
        <li className="Email">
          <a href="https://www.instagram.com/maitrikjpatel/" target="_blank" rel="noopener">
            Email
          </a>
        </li> */}
      </ul>
      <div className={styles.footerBrew} />
      {/* <p className={styles.footerCopyright}>© copyright 2018</p> */}
    </footer>
  )
}

export default Footer
