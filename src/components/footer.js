import React, { useState, useEffect } from 'react';
import { Col, Container, Card, Row } from 'reactstrap';
import { Link } from "gatsby";
import * as Icon from 'react-feather';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import formatLanguage from '../util/format-language';

export default function Footer() {
        const { t } = useTranslation()
        const language = formatLanguage(i18next.language)
        const [arrow, setArrow] = useState(false);

        const handleScroll = () => {
            if (
                document.body.scrollTop >= 500 ||
                document.documentElement.scrollTop >= 500
            ) {
                setArrow(true);
            } else {
                setArrow(false);
            }
        };
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);


        return (
            <>
                {/* Back to top */}
                <a href="#" onClick={() => {window.scrollTo({top:0, behavior: 'smooth'})}} style={{ display: arrow === true ? 'block' : 'none' }} id="back-to-top" className="back-to-top rounded-pill fs-5"><Icon.ArrowUp className="fea icon-sm icons align-middle" /></a>
                {/* Back to top  */}

                {/* Footer Start  */}
                <footer className="bg-footer">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-12">
                                <div className="footer-py-60 text-center">
                                    <Row className="py-5">
                                        <Col md={4} >
                                            <Card className="border-0 text-center features feature-primary bg-transparent">
                                                <div className="feature-icon text-center mx-auto">
                                                    <i className="uil uil-phone rounded h4 mb-0"></i>
                                                </div>
                                                <div className="content mt-4">
                                                    <h5 className="footer-head">{t('common.phone')}</h5>
                                                    {/* <p className="text-muted"></p>
                                                    <Link to="tel:" className="text-foot"></Link> */}
                                                </div>
                                            </Card>
                                        </Col>

                                        <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <Card className="border-0 text-center features feature-primary bg-transparent">
                                                <div className="feature-icon text-center mx-auto">
                                                    <i className="uil uil-envelope rounded h4 mb-0"></i>
                                                </div>
                                                <div className="content mt-4">
                                                    <h5 className="footer-head">{t('common.email')}</h5>
                                                    {/* <p className="text-muted"></p>
                                                    <Link to="mailto:" className="text-foot"></Link> */}
                                                </div>
                                            </Card>
                                        </Col>

                                        <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <Card className="border-0 text-center features feature-primary bg-transparent">
                                                <div className="feature-icon text-center mx-auto">
                                                    <i className="uil uil-map-marker rounded h4 mb-0"></i>
                                                </div>
                                                <div className="content mt-4">
                                                    <h5 className="footer-head">{t('common.location')}</h5>
                                                    {/* <p className="text-muted"></p>
                                                    <Link to=""
                                                        data-type="iframe" className="video-play-icon text-foot lightbox">View on Google map</Link> */}
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Row>
                    </Container>

                    <div className="footer-py-30 footer-bar bg-footer">
                        <Container className="text-center">
                            <Row className="align-items-center justify-content-between">
                                <Col lg={3} md={2} sm={3}>
                                    <div className="text-sm-start">
                                        <Link to="/" className="logo-footer">
                                            <div class="matrix-logo-white"  alt="" />
                                        </Link>
                                    </div>
                                </Col>

                                <Col lg={6} md={6} sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <ul className="list-unstyled footer-list terms-service mb-0">
                                        <li className="list-inline-item mb-0"><Link to={`/privacy-policy/${language}`} className="text-foot me-2">{t('footer.privacy')}</Link></li>
                                        <li className="list-inline-item mb-0"><Link to={`/terms/${language}`} className="text-foot me-2">{t('footer.terms')}</Link></li>
                                        <li className="list-inline-item mb-0"><Link to={`/faq/${language}`} className="text-foot me-2">{t('footer.faq')}</Link></li>
                                        {/* <li className="list-inline-item mb-0"><Link to="#" className="text-foot">Contact</Link></li> */}
                                    </ul>
                                </Col>

                                <Col lg={3} md={4} sm={3} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="text-sm-end">
                                        {/* insert copyright */}
                                        {/* <p className="mb-0 text-foot">© {(new Date().getFullYear())}{" "} <Link to="#" className="text-reset"></Link>.</p> */}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </footer>
                {/* Footer End  */}
            </>
        )
    
};