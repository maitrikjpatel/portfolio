import React from 'react'
import SEO from '../components/SEO'

import styles from '../utilities/css/pages/About.module.css'
import Layout from '../components/Layout'
import siteInfo from '../utilities/config/siteInfo'
import Bio from '../components/Bio'
import Tags from '../components/Tags'
import Testimonial from '../components/Testimonial'
import AboutSkills from "../Assets/Images/SingleImages/AboutSkills.png"
import { Link } from 'gatsby'

export default () => {
  const toolsList = siteInfo.toolsList;
  const skillsList = siteInfo.skillsList;

  const topicSvg = (
    <svg viewBox="0 0 55 55" className={styles.svg} role="img">
      <path d="M45.297,21.946l9.656-5.517L27.477,0.825L0,16.429l9.656,5.517L0,27.429l9.656,5.517L0,38.429l27.477,15.698l27.476-15.698
      l-9.656-5.483l9.656-5.517L45.297,21.946z M27.477,3.125l23.435,13.309l-23.435,13.39L4.041,16.434L27.477,3.125z M11.675,23.099
      l15.802,9.028l15.802-9.028l7.633,4.335l-23.435,13.39L4.041,27.434L11.675,23.099z M50.912,38.434l-23.435,13.39L4.041,38.434
      l7.634-4.335l15.802,9.028l15.802-9.028L50.912,38.434z"/>
    </svg>
  )

  const toolSvg = (
    <svg viewBox="0 0 512 512" className={styles.svg}>
      <g>
        <g>
          <path d="M501,470.8l-57.3-163.3V41.2H69.4v260.4L11,470.8H501z M40.2,451l45.9-134.5h339.9L472.9,451H40.2z M89.2,61h333.6v234.6    H89.2V61z"/>
          <polygon points="146.5,186.1 223.7,219.5 223.7,204.9 162.2,178.9 224.7,153.8 224.7,139.2 146.5,172.6   "/>
          <polygon points="233.1,239.3 244.5,239.3 278.9,117.3 267.5,117.3   "/>
          <polygon points="287.3,153.8 348.8,178.9 287.3,204.9 287.3,219.5 365.5,186.1 365.5,172.6 287.3,139.2   "/>
        </g>
      </g>
    </svg>
  )



  return (
    <Layout>
      <div className={styles.pageAbout}>
        <SEO titleText="About me" />

        <Bio title="About me">
          <ul className={styles.aboutContact}>
            <li>
              <Link
                to='/resume'
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </li>
            <li>
              <a href="mailto:maitrik.dev@gmail.com?subject=#LetsMakeFuture&body=Let's make beautiful things together.">maitrik.dev[at]gmail[dot]com</a>
            </li>
            <li>
              <a href="tel:+14088393930">+1-408-839-3930</a>
            </li>
          </ul>
        </Bio>

        <div className={styles.aboutContent}>

          <p>I’m a Design Technologist currently living in San Francisco Bay area, California. I stand on the sweet spot where design and code intersects. My comprehensive knowledge in design and technology allows me to cultivate productive teams in a synergic environment that meets the requirements of creatives and developers concurrently. I utilize UX / Front End Development best practices in agile workflow to cultivate elegant, intuitive and pixel perfect user interface designs and applications.</p>
          <p>I am currently working at DocuSign as a senior UI Engineer to develop design system and design tooling to promote shared design language in mobile, products and marketing teams. I have been a part of design and development projects for many exceptional companies, including&nbsp;
            <a href="https://thewaltdisneycompany.com/" target="_blank">Disney,</a>
            <a href="http://www.sony.co.uk/" target="_blank">Sony,</a>
            <a href="http://www.sapientnitro.com/" target="_blank">SapientNitro,</a>
            <a href="http://www.actuate.com/" target="_blank">OpenText,</a>
            <a href="https://www.prosper.com/invest" target="_blank">Prosper Marketplace,</a>
            <a href="http://alphonso.tv/" target="_blank">AlphansoTV,</a>
            <a href="https://twitter.com/martiansf" target="_blank">MartianSF,</a>
            <a href="http://croudify.com/" target="_blank">Croudify,</a>
            <a href="http://hbpsupplier.in" target="_blank">HBPSupplier,</a>
            and&nbsp;&nbsp;
            <a href="http://skillmil.com/" target="_blank">SkillMil.</a>
          </p>
          <p>
            With a MS in computer science and 7 years of industry experience I still think there’s more for me to learn. I was an attendee at&nbsp;
            <a href="http://www.startupleadership.com/" target="_blank">Startup Leadership Program</a>
            and&nbsp;
            <a target="_blank" href="https://www.gsb.stanford.edu/programs/stanford-ignite">Stanford Ignite</a> 
            program to gain in-depth knowledge about entrepreneurship and startup ecosystem. I want to combine technological and entrepreneurship knowledge to create tangible things that would change the world's outlook on how technology can improve lives.
          </p>

          <h3 className={styles.sectionTitle}>What I am good at</h3>
          <img src={AboutSkills} className={styles.aboutSkills} title="Good Skills"/>
          <h4>{topicSvg} Skills</h4>
          <Tags tags={skillsList} />
          <h4>{toolSvg} Tools</h4>
          <Tags tags={toolsList} />


          {/* <h3 className={styles.sectionTitle}>What people say about me</h3>
          <p>
            When I'm not in front of a computer screen, I spend my time
            paragliding, rock climbing. I also love capturing moments and
            places, through my lens, while exploring the world.
          </p>
          <PhotosGrid>
            Photo
            <br /> Grid
          </PhotosGrid> */}
          
          <h3 className={styles.sectionTitle}>What people say about me</h3>
          <Testimonial/>

          <p>I am exploring for an opportunity to create an intuitive, elegant and a cutting-edge user experience for a promising product, a motivating mentor and an innovating organization. Feel free to reach out by sending me an <a href="mailto:maitrik.dev@gmail.com?subject=#LetsMakeFuture&body=Let's make beautiful things together.">Email</a> or using one of the links at the bottom of the page.</p>
        </div>
      </div>
    </Layout>
  )
}
  