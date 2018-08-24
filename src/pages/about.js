import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import PhotoGrid from '../components/photoGrid'
import Bio from '../components/Bio'

export default () => (
  <Layout>
    <div className="pageAbout">
      <Bio 
        title="About me"
        description={[
        <React.Fragment>
          <a href="http://maitrikpatel.com/resume/Maitrik_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="emailContact" href="mailto:maitrik1419@gmail.com?subject=LetsMakeFuture&body=Lets make wonderful things together.">maitrik1419[at]gmail[dot]com</a>
          <a href="tel:+14088393930">+1-408-839-3930</a>
        </React.Fragment>]}
      />
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
      
      <h3 className="skillsTitle">Skills</h3>
      <div className="fourColumnsLayout"> 
        <p>JAMStack development</p>
        <p>Front-end/UI Architecture</p>
        <p>Design System development</p>
        <p>Google Analytics/Optimize</p>
        <p>Technical Documentation</p>
        <p>Test Driven Development</p>
        <p>Search Engine Optimization</p>
        <p>Cross browser compatibility</p>
        <p>Website Personalization</p>
        <p>Responsive Web Design</p>
        <p>Data Visualization</p>
        <p>Icon fonts Library</p>
        <p>UI/UX prototyping</p>
        <p>Agile Development</p>
        <p>Web accessibility</p>
        <p>Web Performance</p>
        <p>Design tooling</p>
        <p>A/B Testing</p>
        <p>Rebranding</p>
      </div>
      <h3 className="toolsTitle">Tools</h3>     
      <div className="fourColumnsLayout"> 
        <p>React</p>
        <p>Angularjs</p>
        <p>Javascript</p>
        <p>SASS</p>
        <p>CSS</p>
        <p>HTML</p>
        <p>PHP</p>
        <p>GIT</p>
        <p>Figma</p>
        <p>Sketch</p>
        <p>Photoshop</p>
        <p>Illustrator</p>
        <p>Abstract</p>
        <p>Zeplin</p>
        <p>Nodejs</p>
        <p>Gulp</p>
        <p>Webpack</p>
        <p>Wordpress</p>
        <p>Drupal</p>
        <p>Gatsby</p>
      </div>

      <h3>What people say about me !</h3>
      
      <p>When I'm not in front of a computer screen, I spend my time paragliding, rock climbing. I also love capturing moments and places, through my lens, while exploring the world.</p>

      <PhotoGrid title={["Photo", <br />,  "Grid"]}/>

      <p>Don't be a stranger! Give me a shout at <a href="mailto:maitrik1419@gmail.com?subject=LetsMakeFuture&body=Lets make wonderful things together.">maitrik1419[at]gmail[dot]com</a> or find me at one of the social links below.</p>
    </div>
  </Layout>
)