import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Container, Row } from 'reactstrap';
import Seo from '../components/seo';

export const pageQuery = graphql`
  query DefaultPageTemplateQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`


const PageTemplate = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;
    return (
        <Layout>
            < Seo title={frontmatter.title} description={frontmatter.description} />
            <section className="mt-5 pt-md-5">
                    <Container>
                        <Row className="row justify-content-center">
                            <div className="title-heading mt-5 mb-5">
                                    <h4 className="heading my-3">{frontmatter.title}</h4>
                                    <p className="para-desc mx-auto text-muted"></p>
                                    <div dangerouslySetInnerHTML={{ __html: html }} />
                            </div>
                        </Row>
                    </Container>
                </section>   
        </Layout>
    );
};

export default PageTemplate;