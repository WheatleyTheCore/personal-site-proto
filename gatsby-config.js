module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/pages/articles`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}