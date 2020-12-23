/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React, {Fragment } from 'react'
import config from './gatsby-config'

export const onPreRednerHTML = ({ pathname }) => {
  console.log(pathname, "PATHNAME");
  
    // setBodyAttributes({
    //   className: pathname
    // }),
    // https://css-tricks.com/how-to-the-get-current-page-url-in-gatsby/
    // static query hook
    //  or npm plugin
    setPostBodyComponents([
      <script
        key="http://code.jquery.com/jquery-1.9.1.min.js"
        src="http://code.jquery.com/jquery-1.9.1.min.js"
      />,
      <script
        key="./src/scripts/mobilyslider.js"
        src="./src/scripts/mobilyslider.js"
      />,
      <script
        key="./src/scripts/init.js"
        src="./src/scripts/init.js"
      />,
      <script
        key="./src/scripts/jquery-enhancements.js"
        src="./src/scripts/jquery-enhancements.js"
      />
    ])
  }