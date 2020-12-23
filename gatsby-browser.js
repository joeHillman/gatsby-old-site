/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/components/normalize.min.css";
import "./src/components/main.css";

export const onClientEntry = () => {
  const homePortfolioClasses = ["images", "thumbs", "standard", "wide",]
  if(document.body.classList.length > 0) { document.body.removeAttribute('class') }
  homePortfolioClasses.forEach(item => document.body.classList.add(item))
}

export const onRouteUpdate = ({ location }) => {

  switch(location.pathname) {
    case '/' :
    case 'home' :
      const homePortfolioClasses = ["images", "thumbs", "standard", "wide"];    
      if(document.body.classList.length > 0) { document.body.removeAttribute('class') }
      homePortfolioClasses.forEach(item => document.body.classList.add(item))
    break;
    case '/about': 
      const aboutClasses = ["copy", "about", "standard", "wide"];
      if(document.body.classList.length > 0) { document.body.removeAttribute('class') }
      aboutClasses.forEach(item => document.body.classList.add(item))
    break;
    case '/contact' :
      const contactClasses = ["copy", "contact", "standard", "wide"];
      if(document.body.classList.length > 0) { document.body.removeAttribute('class') }
      contactClasses.forEach(item => document.body.classList.add(item))
    break;
  }
}