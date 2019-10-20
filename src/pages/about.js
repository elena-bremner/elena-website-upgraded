import React from 'react'
import Layout from '../components/layout'
import Styles from './about.module.css'

const About = () => (
  	<Layout>
		<div id="main-content2" >  
		    <h1 className={Styles.hello}>Hello! - <br></br> I'm Elena.</h1>
		    <h2 className={Styles.introduction}>I study Industrial Design at RISD</h2>
		</div>
 	</Layout>
)

export default About