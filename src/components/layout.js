import React from 'react'
import { Link } from "gatsby"
import resume from './resume.pdf'
import style from './layout.module.css'

const linkStyle = {
  color: '#CACCCE',
  textDecoration: 'none',
}
const linkActiveStyle = {
  color: "#FF7963", 
}

export default ({ children }) => {
    return (
      <div className={style.container}>
        <div className={style.sidebar}>
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

        <div className={style.maincontent}>
          { children }
        </div>
      </div>
    ) 
}

