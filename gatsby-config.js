require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/Flux-Contentful`,
  siteMetadata: {
    title: `Flux Federation`,
    description: `...`,
    author: `Ira Ritchie Meek`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "cms.fluxfederation.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2v3iy2n1zfbh`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
