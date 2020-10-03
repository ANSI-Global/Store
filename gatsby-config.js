if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
module.exports = {
  siteMetadata: {
    title: `ansi`,
    description: `ANSIGlobal is a react eCommerce platform.`,
    author: `@himadu`,
    siteUrl: `https://store.ansiglobal.com`,
  },
  plugins: [
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
        name: `ansi-store`,
        short_name: `ansi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ansi-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // Robots.txt
    "gatsby-plugin-robots-txt",
    // sass/scss
    `gatsby-plugin-sass`,
    // Page Load screen
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // Server Graphql
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "Server",
        // This is the field under which it's accessible
        fieldName: "server",
        // URL to query from
        url: "https://ansi.herokuapp.com/graphql", // http://localhost:8080/graphql
      },
    },
    // FaunaDB Connection
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Fauna",
        fieldName: "fauna",
        url: "https://graphql.fauna.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.FAUNADB_KEY}`,
        },
      },
    },
    // Redux
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/state/createStore",
      },
    }, // Firebase connection
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAgkfWxahbDS8goMk1dnvpeCEpFqUrZvoo",
          authDomain: "ansi-68e9a.firebaseapp.com",
          databaseURL: "https://ansi-68e9a.firebaseio.com",
          projectId: "ansi-68e9a",
          storageBucket: "ansi-68e9a.appspot.com",
          messagingSenderId: "597113660855",
          appId: "1:597113660855:web:52ff5ab6391e13e2717432",
          measurementId: "G-H9B39JD4S2",
        },
        loginPath: "/user/login",
        socialLogins: ["google", "github"],
      },
    },
  ],
}
