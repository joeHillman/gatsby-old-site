import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "lrp-logo.png"}) {
        childImageSharp {
          fixed(width: 351) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <section className="wrap-header">
      <header id="header">
        <div className="wrap-logo">
          <Link href="/" title="LRP Design Home Page" title="HomePage">
            <Img fixed={data.file.childImageSharp.fixed} alt="LittleRedPlaneDesignLogo" />
          </Link>
        </div>
        <Nav />
      </header>
    </section>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
