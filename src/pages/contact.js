import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
	<section className="wrap-content">
		<h1>Contact Us By&hellip;</h1>
    <div id="hcard-Joe-Hillman" className="vcard wrap-copy">
      <div className="fn">Joe Hillman</div>
      <a className="url" href="http://www.linkedin.com/in/joehillman/">Linked In</a><br/>
      <a className="email" href="mailto:joe@littleredplanedesign.com">joe@littleredplanedesign.com</a>
      <div className="tel">508-642-4171</div> 
      <div className="adr">
        <span className="locality">Framingham</span>
      , 
        <span className="region">MA</span>
      ,
        <span className="postal-code">01702</span>

        <span className="country-name">USA</span>
      </div>
    </div>
	</section>
  </Layout>
)

export default Contact
