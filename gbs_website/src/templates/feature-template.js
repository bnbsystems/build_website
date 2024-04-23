import React from "react";
import { Container, Row } from "reactstrap";
import { Layout } from "react-feather";
import { graphql } from "gatsby";
import Seo from "../components/seo";

export const featurePageQuery = graphql`
  query FeaturePageTemplateQuery($slug: String!) {
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

const FeatureTemplatePage = ({data}) => {
    const { frontmatter, html } = data.markdownRemark;

    return (
            <Layout>
            <Seo title={frontmatter.title} description={frontmatter.description} />
            <section className="section">
                <Container>
                        <Row className="mt-5 pt-5 justify-content-center">
                            <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                <div className="title-heading">
                                    <h4 className="heading my-3">{frontmatter.title}</h4>
                                    <p className="para-desc mx-auto text-muted">{frontmatter.description}</p>
                                </div>
                            </div>
                        </Row>
                    </Container>
            </section>
            {/* <section className="mb-5">
                <Container>
                        <Row className=" justify-content-center">
                            <div className="col-lg-12">
                                <div dangerouslySetInnerHTML={{ __html: html }} />
                            </div>
                        </Row>
                    </Container>
            </section> */}
            </Layout>
    )
}

export default FeatureTemplatePage;