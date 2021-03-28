module.exports = {
  siteMetadata: {
    title: "In The Know local",
    titleTemplate: "%s | In The Know Local",
    description: "In the Know Local. This is the description of the site :)",
    url: "https://www.intheknowlocal.com",
    image: "/images/icon.png",
    twitterUsername: "@influencefactor"
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "wq57o41e",
        dataset: "development",
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
