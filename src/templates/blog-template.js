import React from "react";
import { graphql } from 'gatsby';
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/layout";
import Seo from '../components/seo';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const blogPostPageQuery = graphql`
  query BlogPostPageTemplateQuery($slug: String!, $language: String!) {
    markdownRemark(  frontmatter: { slug: { eq: $slug }, language: { eq: $language } }) {
      html
      frontmatter {
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredImageAlt
        featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
        }
      }
    }
  }
`

const BlogPageTemplate = ({data}) => {
    const { frontmatter, html } = data.markdownRemark;
    let featuredImg = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
    
    return (
        <Layout>
            <Seo title={frontmatter.title} description={frontmatter.description} ogType={"article"}/>
            <section className="section">
            <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <GatsbyImage image={featuredImg} className="img-fluid shadow-md rounded-md" alt={frontmatter.featuredImageAlt} />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">{frontmatter.title}</h4>
                                <p className="text-muted">{frontmatter.description}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mb-5">
                <Container>
                        <Row className=" justify-content-center">
                            <div className="col-lg-12">
                                <div dangerouslySetInnerHTML={{ __html: html }} />
                            </div>
                        </Row>
                    </Container>
            </section>
        </Layout>
    )
}

export default BlogPageTemplate;