import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import Img from "gatsby-image";

const PortfolioInternal = ({ pageContext: { page } }) => {
  // const portfolioImage = page.portfolioImage;
  const query = graphql`
  query {
    file(relativePath: {eq: $portfolioImage}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }
  `
  console.log(query.file, "QUERY")
  return(
    <Layout>
    <section className="wrap-content">
      PORTFOLIO INTERNAL PAGE {page.title}
      {page.headline}
      {page.tags}
      {page.content}
{console.log(query.file)}      
      {/* <Img 
        fluid={query.file.childImageSharp.fluid}
        alt="IECSC ALT"
      /> */}
      {/* will need the image module for gatsy here */}
      {/* <img src={`../images/comps-full-size/${page.portfolioImage}`} /> */}
    </section>
    </Layout>
  )
}

export default PortfolioInternal
