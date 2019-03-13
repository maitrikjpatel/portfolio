import React from 'react'
import SEO from '../components/SEO'

import styles from '../utilities/css/pages/About.module.css'
import Layout from '../components/Layout'
import siteInfo from '../utilities/config/siteInfo'
import Bio from '../components/Bio'
import Tags from '../components/Tags'
import Testimonial from '../components/Testimonial'
import resume from "../Assets/MaitrikResume.pdf"
import AboutSkills from "../Assets/Images/SingleImages/AboutSkills.png"

export default () => {
  const toolsList = siteInfo.toolsList;
  const skillsList = siteInfo.skillsList;
  console.log(resume)
  return (
    <Layout>
      <div className={styles.pageAbout}>
        <SEO titleText="About me" />

        <Bio title="About me">
          <ul className={styles.aboutContact}>
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="mailto:maitrik1419@gmail.com?subject=#LetsMakeFuture&body=Let's make beautiful things together.">maitrik1419[at]gmail[dot]com</a>
            </li>
            <li>
              <a href="tel:+14088393930">+1-408-839-3930</a>
            </li>
          </ul>
        </Bio>

        <div className={styles.aboutContent}>
          <p>I’m a Design Technologist currently living in Bay Area, California. I stand on the sweet spot where design and code intersects. My comprehensive knowledge in design and technology allows me to cultivate productive teams in a synergic environment that meets the requirements of creatives and developers concurrently. I utilize UX / Front End Development best practices in agile workflow to cultivate elegant, intuitive and pixel perfect user interface designs and applications.</p>

          <p>I am currently working at DocuSign as an senior UI Engineer to develop design system and design tooling to promote shared design language in mobile, products and marketing teams. I have over 7 years of industry experience and have been a part of design and development projects for many exceptional companies during those years, including
            <a href="https://thewaltdisneycompany.com/" target="_blank">
              Disney,
            </a>
            <a href="http://www.sony.co.uk/" target="_blank">
              Sony,
            </a>
            <a href="http://www.sapientnitro.com/" target="_blank">
              SapientNitro,
            </a>
            <a href="http://www.actuate.com/" target="_blank">
              OpenText,
            </a>
            <a href="https://www.prosper.com/invest" target="_blank">
              Prosper Marketplace,
            </a>
            <a href="http://alphonso.tv/" target="_blank">
              AlphansoTV,
            </a>
            <a href="https://twitter.com/martiansf" target="_blank">
              MartianSF,
            </a>
            <a href="http://croudify.com/" target="_blank">
              Croudify,
            </a>
            <a href="http://hbpsupplier.in" target="_blank">
              HBPSupplier,
            </a>
            and
            <a href="http://skillmil.com/" target="_blank">
              SkillMil.
            </a>
          </p>
          <p>
            With a MS in computer science and industry experience I still think there’s more for me to learn. I recently graduated from
            <a href="http://www.startupleadership.com/" target="_blank"> Startup Leadership Program</a>
            and
            <a
              target="_blank"
              href="https://www.gsb.stanford.edu/programs/stanford-ignite"
            >Stanford Ignite</a> 
            with in-depth knowledge about entrepreneurship and startup ecosystem. I want to combine technological and entrepreneurship knowledge to create tangible things that would have the real impact on people’s lives.
          </p>

          <h3 className={styles.sectionTitle}>What I am good at</h3>

          <img src={AboutSkills} className={styles.aboutSkills} title="Good Skills"/>

          <h4>Skills</h4>
          <Tags tags={skillsList} />
          <h4>Tools</h4>
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

          <p>I am exploring for an opportunity to create an intuitive, elegant and a cutting-edge user experience for a promising product, a motivating mentor and an innovating organization.</p>
          <p>
            Don't be a stranger! Give me a shout at
            <a href="mailto:maitrik1419@gmail.com?subject=#LetsMakeFuture&body=Let's make beautiful things together.">
              maitrik1419[at]gmail[dot]com
            </a>
            or find me at one of the social links below.
          </p>
        </div>
      </div>
    </Layout>
  )
}
