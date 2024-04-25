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
                            language
                        }
                    }
                }
            }
        }
    `);
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = node.frontmatter.template;
      const slug = node.frontmatter.slug;
      const language = node.frontmatter.language;
      const nodePath = template === 'default' ? `${slug}/${language}`: `${template}/${slug}/${language}`;


      let component;
      switch (template) {
          case 'blog':
              component = path.resolve('./src/templates/blog-template.js');
              break;
          case 'feature':
              component = path.resolve('./src/templates/feature-template.js');
              break;
          // Add cases for other templates
          default:
              component = path.resolve('./src/templates/default-template.js');
      }

      createPage({
          path: nodePath,
          component,
          context: {
              slug,
              language
          },
      });
  });

}