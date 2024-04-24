/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const seoSettings = require("./seo-settings.json")
module.exports = {
  siteMetadata: seoSettings.meta,
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-postcss`,
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
          name: 'pages',
          path: `${__dirname}/src/pages/`, // Path to your Markdown files
      },
      __key: "pages"
  },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: seoSettings.options
    },
  ],
}
