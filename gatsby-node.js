/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// import portfolioInternalData from './src/data/portfolioInternalData.js';


module.exports.createPages = ({ actions }) => {
  const portfolioInternalData = require('./src/data/portfolioInternalData');
  const { createPage } =  actions;

  console.log(portfolioInternalData.data, "DATA");  

  portfolioInternalData.data.forEach(page=> {
    createPage({
      path: `${page.title}`,
      component: require.resolve(`./src/templates/portfolioInternal.js`),
      context: { page, portfolioImage: page.portfolioImage }
    })
  })

}