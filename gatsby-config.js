require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `The ultimate content checklist from Kryptonum 🚀`,
    siteUrl: `https://ultimate.kryptonum.co.uk`,
    description: `On the next few pages you will find some useful information regarding your post optimization followed by a simplified checklist which you can reuse each time you post something new to make sure you never miss a single step of the process!`,
    twitter: `@kryptonum`,
    author: `@kryptonum.studio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:400,900`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kryptonum`,
        short_name: `kryptonum`,
        lang: `en`,
        start_url: `/`,
        background_color: `#171717`,
        theme_color: `#171717`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
