import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import PhotoGrid from '../components/photoGrid'
import Bio from '../components/Bio'

export default () => (
  <Layout>
    <div className="text-justify">
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
        <a href="https://thewaltdisneycompany.com/" target="_blank">&nbsp;The Walt Disney Studio,</a>
        <a href="http://www.sony.co.uk/"target="_blank">&nbsp;Sony,</a>
        <a href="http://www.sapientnitro.com/" target="_blank">&nbsp;SapientNitro,</a>
        <a href="http://www.actuate.com/" target="_blank">&nbsp;OpenText,</a>
        <a href="https://www.prosper.com/invest" target="_blank">&nbsp;Prosper Marketplace,</a>
        <a href="http://alphonso.tv/" target="_blank">&nbsp;AlphansoTV,</a>
        <a href="https://twitter.com/martiansf" target="_blank">&nbsp;MartianSF,</a>
        <a href="http://croudify.com/" target="_blank">&nbsp;Croudify,</a>
        <a href="http://hbpsupplier.in" target="_blank">&nbsp;HBPSupplier,</a> and
        <a href="http://skillmil.com/" target="_blank">&nbsp;SkillMil.</a>
      </p>
      <p>With an MS in computer science and industry experience, I still think there’s more for me to learn. I recently graduated from <a href="http://www.startupleadership.com/" target="_blank">Startup Leadership Program</a> and   <a target="_blank" href="https://www.gsb.stanford.edu/programs/stanford-ignite">Stanford Ignite</a> with in-depth knowledge about entrepreneurship and startup ecosystem. I want to combine technological and entrepreneurship knowledge to create tangible things that would have the real impact on people’s lives.</p>
      
      <h3>Skills</h3>
      <ol>
        <li><p>JAM stack web development</p></li>
        <li><p>Front-end/UI Architecture</p></li>
        <li><p>Design System development</p></li>
        <li><p>SEO, W3C, Web accessibility</p></li>
        <li><p>Cross browser compatibility</p></li>
        <li><p>Web Performance/Optimization</p></li>

        <li><p>Technical Documentation</p></li>
        <li><p>Test Driven Development</p></li>
        <li><p>Website Personalization</p></li>
        <li><p>Responsive Web Design</p></li>
        <li><p>Data Visualization</p></li>
        <li><p>Icon fonts Library</p></li>

        <li><p>Rebranding expert</p></li>
        <li><p>UI/UX prototyping</p></li>
        <li><p>Agile Development</p></li>
        <li><p>A/B Testing</p></li>
        <li><p>SVG Animation</p></li>
        <li><p>Design tooling</p></li>
      </ol>
      <h3>Tools</h3>     
      <ol> 
        <li><p>React</p></li>
        <li><p>Angularjs</p></li>
        <li><p>Javascript</p></li>
        <li><p>SASS</p></li>
        <li><p>CSS</p></li>
        <li><p>HTML</p></li>

        <li><p>Figma</p></li>
        <li><p>Sketch</p></li>
        <li><p>Photoshop</p></li>
        <li><p>Illustrator</p></li>
        <li><p>PHP</p></li>
        <li><p>GIT</p></li>

        <li><p>Nodejs</p></li>
        <li><p>Gulp</p></li>
        <li><p>Webpack</p></li>
        <li><p>Wordpress</p></li>
        <li><p>Drupal</p></li>
        <li><p>Gatsby</p></li>
      </ol>

      <hr /> 
        <h2>What people say about me !</h2>
      <hr />

      <p>When I'm not in front of a computer screen, I spend my time paragliding, rock climbing. I also love capturing moments and places, through my lens, while exploring the world.</p>

      <PhotoGrid title={["Photo", <br />,  "Grid"]}/>

      <p>I am exploring for an opportunity to create an intuitive, elegant and a cutting-edge user experience for a promising product, a motivating mentor and an innovating organization. </p>
      <p>Don't be a stranger! Give me a shout at <a href="mailto:maitrik1419@gmail.com?subject=LetsMakeFuture&body=Lets make wonderful things together.">maitrik1419[at]gmail[dot]com</a> or find me at one of the social links below.</p>
    </div>
  </Layout>
)