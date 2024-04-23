import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Col, Container, Row } from "reactstrap";

import BackgroundImage from '../assets/images/bg/marketing-shape.png';
// import CelebrationImage from '../../assets/images/svg/celebration.svg';
import ServerImage from '../assets/images/main_page/server.jpg'
import { useTranslation } from 'react-i18next';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "../components/Contact";
import FeaturedArticles from "../components/featured-articles";
import Feature from "../components/Feature";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}>
  <Layout>
    
    <section className="bg-home bg-soft-primary d-flex align-items-center" style={{ background: `url(${BackgroundImage}) center center`, height: "auto" }} id="home">
                    <Container>
                        <Row className="mt-5 pt-5 justify-content-center">
                            <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                <div className="title-heading">
                                    <h4 className="heading my-3">Godot Build Server</h4>
                                    <p className="para-desc mx-auto text-muted">{t('landing_page.subtitle')}</p>
                                </div>

                                {/* <div className="text-center subcribe-form mt-4 pt-2">
                                    <form>
                                        <input type="url" id="url" className="border bg-white rounded-lg" style={{ opacity: "0.85" }} required placeholder="https://shreethemes.in" />
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </form>
                                </div> */}

                                <Row className="justify-content-center">
                                    <Col lg={7} md={10}>
                                        <div className="home-dashboard">
                                            {/* <img src={CelebrationImage} alt="" className="img-fluid" /> */}
                                            <img src={ServerImage} alt="" className="img-fluid" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                </section>
                <div className="mt-3 position-relative">
                    <div className="shape marketing-hero overflow-hidden text-light"></div>
                </div>

                {/* Partners start */}
                <section className="mt-5 pt-md-5">
                    <Container>
                        <Row className="row justify-content-center">
                            {/* <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={AmazonImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={GoogleImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={LenovoImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={PaypalImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={ShopifyImage} className="avatar avatar-ex-sm" alt="" />
                            </Col>

                            <Col lg={2} md={2} className="col-6 text-center py-4 py-sm-0">
                                <img src={SpotifyImage} className="avatar avatar-ex-sm" alt="" />
                            </Col> */}
                        </Row>
                    </Container>
                </section>
                
                <Feature />
                <FeaturedArticles />
                <Contact />
                
  </Layout>
  </GoogleReCaptchaProvider>
)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
