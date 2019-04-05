module.exports = {
  siteMetadata: {
    title: `הדף היומי בתלמוד עשר הספירות`,
    description: `...`,
    author: `@veedeezee`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TES Daf Hayomi by Hasulam`,
        short_name: `dytes`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/hasulam-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
