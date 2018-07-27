import React from 'react'
import styles from "./Footer.module.css"

function Footer(props) {
  const {
    ...restProps
  } = props

  return (
    <footer className={styles.footer}>
    <div>
      <div className={styles.footerBrew} />
      <div className={styles.footerLinks}>
        <p>Stalk</p> 
        <ul>
          <li className="twitter"><a href="https://twitter.com/maitrikjpatel" target="_blank">Twitter</a></li>
          <li className="linkedin"><a href="https://www.linkedin.com/in/maitrikpatel/" target="_blank">Linkedin</a></li>
          <li className="github"><a href="https://github.com/maitrikjpatel/" target="_blank">Github</a></li>
          <li className="dribbble"><a href="https://dribbble.com/maitrikjpatel" target="_blank">Dribbble</a></li>
          <li className="Instagram"><a href="https://www.instagram.com/maitrikjpatel/" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
    {/* <p className={styles.footerCopyright}>© copyright 2018</p> */}
  </footer>
  )
}

// Footer.propTypes = {}

// Footer.defaultProps = {}

export default Footer
