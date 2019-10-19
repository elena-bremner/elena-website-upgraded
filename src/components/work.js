import React from "react";
import styles from "./work.module.css";
import Img from "gatsby-image"

const Work = props =>
  <div>
     <a href={props.link}> 
      <div>
        <div className={styles.container}>
          <Img fluid={props.picture} className={styles.image}/>
          <div className={styles.middle}>
            <div className={styles.text}>
              {props.name}         
            </div>
          </div>
        </div>
      </div>    
    </a>
  </div>  

export default Work