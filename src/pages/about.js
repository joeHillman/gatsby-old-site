import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = ({ location }) => (
  <Layout>
      {console.log(location, "LOCATION")}
    	<section className="wrap-content">
        <h1>About the Company</h1>
          <section className="wrap-copy company">
            <h2>About LRP Design</h2>
            <p>
            It&lsquo;s our philosophy that each client has a different set of needs and concerns, influences, background, and experiences. It&lsquo;s our goal to understand all of this through through collaboration and communication. To design and build your website with scalability in mind, the inner workings must be understood and then applied to the larger picture. We consider trust and respect as the foundation of any relationship, business and personal, and strive to build and maintain long term client relationships.</p>
          </section>
          <section className="wrap-copy plane">
            <h2>About the Plane</h2>
            <p>Little Red Plane Design was inspired by Virginia (Gigi) Hillman. At 50 years old, Gigi had decided to take up flying. After many hours of theory and practice, Gigi earned her pilot&lsquo;s license, which she quickly put to use. All through her coursework, she was told she needed a copilot and she chose the adorable character Snoopy. The iconic red biplane is a tribute to Virginia Hillman and her &ldquo;can do&rdquo; attitude she maintained until her last days with us in January 2013, serving as a reminder that things may be difficult, but it is all &ldquo;doable&rdquo;. </p>
          </section>
          <section className="wrap-copy services">
            <h2>About our Services</h2>
            <p>We are currently using Adobe Creative Suites and Notepad++ to design and build custom or template websites &amp; are currently researching the Drupal 7 CMS to empower you to update your website.
            </p>
            <ul>
            <li className="list-head">Our Services Include</li>
            <li>Custom Designs</li>
            <li>HTML 5 Markup</li>
            <li>Adaptive Layouts &mdash; To enable your site to scale down to mobile and tablets.</li>
            <li>Cross Browser Compatibility</li>
            </ul>
            <p>
            <a href="contact.html" title="Contact Us" target="_self" tabIndex="3">Contact us</a> now to discuss your needs. No project is the same and reasonable rates will be determined on a project by project basis.
            </p>
          </section>
          <section className="wrap-copy joe">
            <h2>About Joe</h2>
            <p>Joe Hillman is the pilot of Little Red Plane Design and hails from the sunny blue skies of Framingham, Massachusetts. Armed with a B.A in Music Technology, a Masters Certification in Digital Mutltimedia and 3 years of professional experience in front end design and development, a solution to your needs is well within our reach.<br/><br/>A dedication to customer service paired with a discipline to continually improve our craft to deliver a polished end product, will set us apart from the competition. <a href="http://www.linkedin.com/in/joehillman/" target="_blank" title="Linked In Profile" tabIndex="3">See what others have to say</a>.</p>
          </section>
      </section>
  </Layout>
)

export default About
