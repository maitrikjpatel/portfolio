import React from "react"
import styles from "../utils/css/pages/About.module.css"
import Layout from '../components/Layout'
import PhotosGrid from '../components/PhotosGrid'
import Bio from '../components/Bio'
import Tags from '../components/Tags'
import GridColumnsLayout from '../components/GridColumnsLayout'

export default () => {
  const toolsList = ["React","Angularjs","Javascript","SASS","CSS","HTML","PHP","GIT","Figma","Sketch","Photoshop","Jest","PostCSS","GraphQL","Illustrator","Abstract","Zeplin","Nodejs","Gulp","Webpack","Wordpress","Drupal","Gatsby", "Saas"]
  const skillsList = [ "JAMStack development" , "Front-end/UI Architecture" , "Google Analytics/Optimize" , "Technical Documentation" , "Test Driven Development" , "Website Personalization" , "Responsive Web Design" , "cross-browser testing" , "Website accessibility" , "Website Performance" , "Data Visualization" , "UI/UX prototyping" , "Agile Development" , "Design tooling" , "Design System" , "SEO strategy" , "A/B Testing" , "Rebranding" ]
  return (
    <Layout>
      <div className={styles.pageAbout}>
        <Bio title="About me" >
          <a href="http://maitrikpatel.com/resume/Maitrik_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a className={styles.emailContact} href="mailto:maitrik1419@gmail.com?subject=#LetsMakeFuture&body=Let's make beautiful things together.">maitrik1419[at]gmail[dot]com</a>
          <a href="tel:+14088393930">+1-408-839-3930</a>
        </Bio>
        
        <div className={styles.aboutContent}>
          <p>I’m a Design Technologist currently living in Bay Area, California. Currently, I am working at DocuSign to develop React componentized design system/tooling to promote shared design language in products and marketing web properties. My comprehensive knowledge in design and technology allows me to cultivate elegant, intuitive and pixel perfect user interface designs & applications.</p>

          <p>I have over 7 years of industry experience and have been a part of design and development projects for many exceptional companies during those years, including
            <a href="https://thewaltdisneycompany.com/" target="_blank">&nbsp;Disney,</a>
            <a href="http://www.sony.co.uk/"target="_blank">&nbsp;Sony,</a>
            <a href="http://www.sapientnitro.com/" target="_blank">&nbsp;SapientNitro,</a>
            <a href="http://www.actuate.com/" target="_blank">&nbsp;OpenText,</a>
            <a href="https://www.prosper.com/invest" target="_blank">&nbsp;Prosper Marketplace,</a>
            <a href="http://alphonso.tv/" target="_blank">&nbsp;AlphansoTV,</a>
            <a href="https://twitter.com/martiansf" target="_blank">&nbsp;MartianSF,</a>
            <a href="http://croudify.com/" target="_blank">&nbsp;Croudify,</a>
            <a href="http://hbpsupplier.in" target="_blank">&nbsp;HBPSupplier,</a> and
            <a href="http://skillmil.com/" target="_blank">&nbsp;SkillMil.</a> I recently graduated from <a href="http://www.startupleadership.com/" target="_blank">Startup Leadership Program</a> and   <a target="_blank" href="https://www.gsb.stanford.edu/programs/stanford-ignite">Stanford Ignite</a> with in-depth knowledge about entrepreneurship and startup ecosystem. I want to combine technological and entrepreneurship knowledge to create tangible things that would have the real impact on people’s lives.</p>
          
          <h3 className={styles.sectionTitle}>What I am good at</h3>
          
          <Tags tags={toolsList}/>

          <GridColumnsLayout items={skillsList}></GridColumnsLayout>
          
          <h3 className={styles.sectionTitle}>What people say about me</h3>
          
          <p>When I'm not in front of a computer screen, I spend my time paragliding, rock climbing. I also love capturing moments and places, through my lens, while exploring the world.</p>

          <PhotosGrid>
            Photo<br/> Grid
          </PhotosGrid>
          
          {/* <p>I am exploring for an opportunity to create an intuitive, elegant and a cutting-edge user experience for a promising product, a motivating mentor and an innovating organization.</p> */}
          
          <p>Don't be a stranger! Give me a shout at <a href="mailto:maitrik1419@gmail.com?subject=#LetsMakeFuture&body=Let's make beautiful things together.">maitrik1419[at]gmail[dot]com</a> or find me at one of the social links below.</p>
        </div>
      </div>
    </Layout>
  )
}