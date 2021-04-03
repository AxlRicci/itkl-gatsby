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
