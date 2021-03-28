const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const {data} = await graphql(`
      query InterviewSlugQuery {
        allSanityFeatureInterview {
          nodes {
            slug {
              current
            }
          }
        }
      }
    `)

    data.allSanityFeatureInterview.nodes.forEach(node => {
        actions.createPage({
            path: `/features/${node.slug.current}`,
            component: path.resolve('./src/templates/feature-interview/feature-interview.component.js'),
            context: {slug: node.slug.current }
        })
    })
}