const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            template
                            slug
                        }
                    }
                }
            }
        }
    `);
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = node.frontmatter.template;
      const slug = node.frontmatter.slug;

      let component;
      switch (template) {
          // case 'blog':
          //     component = path.resolve('./src/templates/blogTemplate.js');
          //     break;
          // case 'article':
          //     component = path.resolve('./src/templates/articleTemplate.js');
          //     break;
          // // Add cases for other templates
          default:
              component = path.resolve('./src/templates/default-template.js');
      }

      createPage({
          path: slug,
          component,
          context: {
              // Additional context if needed
              slug,
          },
      });
  });

}