module.exports = {
  siteMetadata: {
    title: `Pizzeria il Tagliere, menù`,
    description: `descrizione del cazzo per whatsapp, in più qualcosa in inglese: Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@SonoLorenzoDossi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `d4cxxnfe`,
        dataset: `production`,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Menù ilTagliere`,
        short_name: `Menù ilTagliere`,
        start_url: `/`,
        background_color: `#F1FFEA`,
        theme_color: `#B6E79F`,
        display: `standalone`,
        icon: `src/images/ogImage.webp`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
