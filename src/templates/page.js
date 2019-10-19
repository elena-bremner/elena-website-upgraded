import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
  let post = data.markdownRemark
  return (
    <Layout>
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date 
        desc
      }
    }
  }
`;
