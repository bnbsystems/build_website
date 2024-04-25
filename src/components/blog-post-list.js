import React from "react";
import { Col, Container, Card, Row, CardBody } from "reactstrap";
import { Link, StaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogPostList(){
    return (
        <StaticQuery 
            query={
                graphql`
                query BlogPostListQuery {
                  allMarkdownRemark( 
                      sort: { frontmatter: {date: DESC} }
                      filter: { frontmatter: { template: { eq: "blog" } } }
                  ) {
                    edges {
                      node {
                          frontmatter {
                              slug
                              date(formatString: "MMMM DD, YYYY")
                              title
                              description
                              language
                              featuredImageAlt
                              featuredImage {
                                  childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                  }
                              }
                            }
                      }
                    }
                  }
                }
              `
            }
            render={(data, count) => <BlogPostListTemplate data={data}/>}
        />
    )
}

export function BlogPostListTemplate({ data }) {
    const { t } = useTranslation()
    const currentLanguage = i18next.language;
    const edges = data.allMarkdownRemark.edges
    const nodes = edges.filter((edge) => edge.node.frontmatter.language === currentLanguage).map((edge) => edge.node)
    

    const mapNodeToListItem = ( node )  => {
        const { frontmatter } = node;
        let featuredImage = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
        return (
            <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className="blog blog-primary shadow rounded overflow-hidden border-0">
                    <div className="blog-image position-relative overflow-hidden">
                        <GatsbyImage image={featuredImage} className="img-fluid rounded-md" alt={frontmatter.featuredImageAlt} />
                    </div>

                    <CardBody className="content p-0">
                        <div className="p-4">
                            <Link to={`/blog/${frontmatter.slug}/${frontmatter.language}`} className="h5 title text-dark d-block mb-0">{frontmatter.title}</Link>
                            <p className="text-muted mt-2 mb-0">{frontmatter.description}</p>

                            <div className="mt-3">
                                <Link to={`/blog/${frontmatter.slug}/${frontmatter.language}`} className="link text-dark">{t('common.read_more')}<i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        )
    }
    return (
        <>
            {/* Start Blog  */}
            <section className="section bg-light" id="blog">
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">{t('landing_page.articles.title')}</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">{t('landing_page.articles.subtitle')}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {nodes && nodes.map(mapNodeToListItem)}
                    </Row>
                </Container>
            </section>
            {/* End Blog  */}
        </>
    )
}