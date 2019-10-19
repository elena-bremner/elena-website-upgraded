import React from "react"
import Work from "../components/work"
import styles from "./index.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
  <div className={styles.wrapper}> 
  {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id} className={styles.subwrapper}>
        <Work
          name={node.frontmatter.title}
          picture= {node.frontmatter.square.childImageSharp.fluid}
          description= {node.frontmatter.desc}
          link={"work" + node.fields.slug}
        />
      </div>
    )}
 </div>
 </Layout>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: { fields: [frontmatter___order], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD, MMMM, YYYY")
            desc
            square{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            order
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
