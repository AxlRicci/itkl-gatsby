module.exports = {
  siteMetadata: {
    title: "In The Know local",
    titleTemplate: "%s",
    description: "In The Know Local is a publication dedicated to showcasing incredible locals and their cities. Click on any of our covers and it will be easy to eat, drink, explore and shop like a local. Through short Q+A articles, we enliven your adventurous side and tempt you to dive into someone else’s city and discover all the joy and delight within.",
    url: "https://www.intheknowlocal.com",
    image: "/images/icon.png",
    twitterUsername: "@influencefactor"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
        // Defines where to place the tracking script - `true`  in the head and `false` in the body
        head: true,
        // // Setting this parameter is optional
        anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Defers execution of google analytics script after page load
        // defer: false,
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "wq57o41e",
        dataset: "development",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: 'src/images/favicon.jpg'
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
