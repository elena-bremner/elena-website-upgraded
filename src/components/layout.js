import React from 'react'
import { Link } from "gatsby"
import resume from './resume.pdf'
import './layout.css'

const linkStyle = {
  color: '#CACCCE',
  textDecoration: 'none',
}
const linkActiveStyle = {
  color: "#FF7963", 
}

export default ({ children }) => {
    return (
      <div id="container">
        <div id="sidebar">
        	<Link to="/" style={linkStyle} activeStyle={linkActiveStyle}>
            + Work
          </Link>

       	   <br/>

          <Link to="/about/" style={linkStyle} activeStyle={linkActiveStyle}>
          + About me
          </Link>

           <br/>

          <Link to="/contact/" style={linkStyle} activeStyle={linkActiveStyle}>
          + Contact
          </Link>

          <br/> 

          <a href={resume} style={linkStyle}> + Resume</a>
        </div>

        <div id="main-content">
          { children }
        </div>
      </div>
    ) 
}

