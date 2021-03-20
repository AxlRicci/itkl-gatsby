module.exports = {
  siteMetadata: {
    title: "itkl",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "wq57o41e",
        dataset: "production",
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
