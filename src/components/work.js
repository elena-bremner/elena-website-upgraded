import React from "react";
import Styles from "./work.module.css";
import Img from "gatsby-image"

const Work = props =>
  <div>
     <a href={props.link}> 
      <div>
        <div className={Styles.container}>
          <Img fluid={props.picture} className={Styles.image}/>
          <div className={Styles.middle}>
            <div className={Styles.text}>
              {props.name}         
            </div>
          </div>
        </div>
      </div>    
    </a>
  </div>  

export default Work