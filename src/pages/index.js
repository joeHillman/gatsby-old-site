import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="wrap-content">
	<div className="slider">
		<div className="sliderContent">
			<section className="item"><h2>IECSC Site Build</h2>
				<p className="my-role">
				 Template HTML, CSS, Rotator Creation, jQuery Upgrades
				</p>
			<a href="iecsc.html" title="International Esthetics, Cosmetics and Spa Conference"><img src="../images/thumbs/iecsc-thumb.jpg" alt="International Esthetics, Cosmetics and Spa Conference" className="thumb" /></a>
			</section>
			<section className="item"><h2>American Salon Prototype</h2>
				<p className="my-role">
				 Wireframe, HTML5, Adaptive CSS, Drupal 7 Templates
				</p>
			<a href="amsalon-adaptive.html" title="Prototype Adaptive Layout"><img src="../images/thumbs/thumb-amsalon-wireframe.png" alt="Prototype Adaptive Layout" className="thumb" /></a>
			</section>			
			<section className="item"><h2>Itex Show</h2>
				<p className="my-role">
				 HTML, CSS
				</p>
			<a href="itex-homepage.html" title="Itex Show"><img src="../images/thumbs/itex-thumb.jpg" alt="Itex Show" className="thumb" /></a>
			</section>
			<section className="item development"><h2>jQuery Scrollers</h2>
				<p className="my-role">
				 jQuery, Javascript, HTML, CSS, UX/UI, Agile Method
				</p>
			<a href="scroller.html" title="jQuery Scrollers" className="cta-btn"><span className="cta-top">View</span><br/><span className="cta-bottom">Live Demo</span></a>
			</section>		
			<section className="item"><h2>Response Expo</h2>
				<p className="my-role">
				 HTML, CSS, Rotator Upgrades
				</p>
			<a href="response-expo.html" title="Response Expo"><img src="../images/thumbs/response-thumb.jpg" alt="Response Expo" className="thumb" /></a>
			</section>
			<section className="item"><h2>Incentive Travel Shows</h2>
				<p className="my-role">
				 Design Assist, Template HTML, CSS
				</p>
			<a href="travel-series.html" title="Global Travel Series"><img src="../images/thumbs/thumb-ite-gmite.jpg" alt="Incentive Travel Exchange" className="thumb" /></a>
			</section>
			<section className="item"><h2>Home Media Magazine</h2>
				<p className="my-role">
				 Design, HTML, CSS
				</p>
			<a href="home-media-homepage.html" title="Home Media Magazine" target="_blank" tabIndex="3"><img src="../images/thumbs/thumb-hmm-home.jpg" alt="Home Media Magazine" className="thumb" /></a>			
			</section>
			<section className="item"><h2>IBS eNewsletter</h2>
				<p className="my-role">
				 Design, HTML, CSS
				</p>
			<a href="ibs-enews.html" title="International Beauty Show eNewsletter" target="_self" tabIndex="3"><img src="../images/thumbs/thumb-ibs-news.jpg" alt="International Beauty Show eNewsletter" className="thumb" /></a>
			</section>
			<section className="item"><h2>PP &amp; E Site Design</h2>
				<p className="my-role">
				 Design
				</p>
			<a href="portable-plants.html" title="Portable Plants and Equipment"><img src="../images/thumbs/thumb-pp-and-e.jpg" alt="Portable Plants and Equipment" className="thumb" /></a>
			</section>
		</div>
		</div>
	</section>

  </Layout>
)

export default IndexPage
