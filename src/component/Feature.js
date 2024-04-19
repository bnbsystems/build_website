import React from "react";
import { Col, Container, Card, Row } from "reactstrap";
import { Link } from "react-router-dom";

import ServerImage from '../assets/images/main_page/server-2.jpg'
import TeamImage from '../assets/images/main_page/team.jpg'
import { useTranslation } from "react-i18next";

export default function Feature() {
    const services = [
        {
            id: 'productivity',
            icon: 'airplay',
            link: '/feature/productivity'
        },
        {
            id: 'downtime',
            icon: 'circle-layer',
            link: '/feature/reduced-downtime'
        },
        {
            id: 'scalability',
            icon: 'fire',
            link: '/feature/scalability'
        },
        {
            id: 'quality',
            icon: 'flip-h',
            link: '/feature/quality'
        }, 
        {
            id: 'collaboration',
            icon: 'mountains',
            link: '/feature/collaboration'
        },
        {
            id: 'efficiency',
            icon: 'wind',
            link: '/feature/cost-efficiency'
        },
    ]

    const { t } = useTranslation()

    return (
        <>
            {/*  Services START  */}
            <section className="section" id="features">
                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <img src={TeamImage} className="img-fluid shadow-md rounded-md" alt="" />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">{t('landing_page.feature_promotion_1.title')}</h4>
                                <p className="text-muted">{t('landing_page.feature_promotion_1.subtitle')}</p>
                                {/* <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul> */}
                                {/* <Link to="#" className="mt-3 text-primary">{t('common.learn_more')}<i className="uil uil-angle-right-b"></i></Link> */}
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title me-lg-5">
                                <h4 className="title mb-4">{t('landing_page.feature_promotion_2.title')}</h4>
                                <p className="text-muted">{t('landing_page.feature_promotion_2.subtitle')}</p>
                                {/* <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul> */}
                                {/* <Link to="#" className="mt-3 text-primary">{t('common.learn_more')}<i className="uil uil-angle-right-b"></i></Link> */}
                            </div>
                        </Col>

                        <Col lg={6} md={6} className="order-1 order-md-2">
                            <img src={ServerImage} className="img-fluid shadow-md rounded-md" alt="" />
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <Row className="justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h3 className="title mb-3"> {t('landing_page.key_features.title')} </h3>
                                <p className="text-muted mx-auto para-desc mb-0"> {t('landing_page.key_features.subtitle')} </p>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        {services.map((item, key) => (
                            <Col lg={4} md={6} className="mt-5 pt-4" key={key}>
                                <Card className="features feature-primary feature-shadow-md shadow rounded p-4 pt-5">
                                    <div className="icon-style mt-n80 position-relative text-center shadow rounded bg-white mb-4">
                                        <i className={"h4 mb-0 uil uil-" + item.icon}></i>
                                    </div>
                                    <div className="content">
                                        <Link to={item.link} className="title text-dark h5">{t(`landing_page.key_features.${item.id}.title`)}</Link>
                                        <p className="text-muted mt-3">{t(`landing_page.key_features.${item.id}.description`)}</p>
                                        <Link to={item.link} className="text-dark title">{t('common.read_more')}<i className="uil uil-arrow-right"></i> </Link>
                                    </div>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </Container>

                {/* <Container className="mt-100 mt-60">
                    <Row>
                        <Col lg={5}>
                            <div className="section-title">
                                <h4 className="section-title mb-3 mb-lg-0">Some of the most importent <br /> things in this tools</h4>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                        </Col>
                    </Row>
                </Container> */}
            </section>
        </>
    )
};