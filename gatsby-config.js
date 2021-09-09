module.exports = {
  siteMetadata: {
    title: `Schopfung Projekt`,
    description: `Description du site Schopfung Projekt`,
    author: `Thomas AGUIRREGABIRIA`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
    },
   },
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
      resolve: 'gatsby-source-datocms',
      options: {apiToken: `0b2da491ae97ffdc0d787f61848c89`}
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: `ZmNjNDEzMTgtMjVjNC00MGEwLTk2ZWUtMGFiY2RlYTU1MTZiNjM3NjY0NTEwOTI3NTcxNTU3`,
        js: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js',
        jquery: false,
        styles: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css'
      }
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.2.1",
        publicApiKey: "ZmNjNDEzMTgtMjVjNC00MGEwLTk2ZWUtMGFiY2RlYTU1MTZiNjM3NjY0NTEwOTI3NTcxNTU3", // use public api key here or in environment variable
        defaultLang: "fr",
        currency: "eur",
        openCartOnAdd: false,
        useSideCart: false,
        locales: {
          fr: {
            actions: {
              checkout: "Valider le panier",
            },
          },
        },
        templatesUrl:
          "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        innerHTML: `
            <billing section="bottom">
                <h1>factures ici</h1>
            </billing>`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
