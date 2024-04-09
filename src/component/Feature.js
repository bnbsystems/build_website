import React from "react";
import { Col, Container, Card, Row } from "reactstrap";
import { Link } from "react-router-dom";

import Feature1 from "../assets/images/1.png";
import Feature2 from "../assets/images/2.png";

export default function Feature() {
    const services = [
        {
            id: 'service1',
            icon: 'airplay',
            title: "Productivity",
            description: "Automate boring, repetitive tasks by integrating CI/CD piepline into your projects."
        },
        {
            id: 'service2',
            icon: 'circle-layer',
            title: "Reduced downtime",
            description: 'Allow developers to build projects in consistent and reproducible build environment outside of their personal workspace.'
        },
        {
            id: 'service3',
            icon: 'fire',
            title: "Scalability ",
            description: 'Scale build infrastructure according to your needs. Build your Godot projects in parallel for different platforms.'
        },
        {
            id: 'service4',
            icon: 'flip-h',
            title: "Enhanced game quality",
            description: 'Increase quality of your games by frequent builds and automated tests, allowing for faster bug fixes.'
        }, 
        {
            id: 'service5',
            icon: 'mountains',
            title: "Collaboration",
            description: 'Get notification on build status and new releases. Promote communication, reviewing changes in centrilized platform which provides detailed logs and audit trails of deployments.'
        },
        {
            id: 'service6',
            icon: 'wind',
            title: "Cost efficiency",
            description: 'Reduce infrastructure costs. Pay only for what you need.'
        },
    ]

    return (
        <>
            {/*  Services START  */}
            <section className="section" id="features">
                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <img src={Feature1} className="img-fluid shadow-md rounded-md" alt="" />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Easy to setup CI/CD piepline</h4>
                                <p className="text-muted">Unlock the power of continuous integration and continuous delivery without the hassle of complex setup processes. Our CI/CD pipeline is designed with simplicity and ease of integration in mind, enabling you to streamline your development workflow effortlessly.</p>
                                {/* <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul> */}
                                <Link to="#" className="mt-3 text-primary">Learn more<i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title me-lg-5">
                                <h4 className="title mb-4">Scale build infrastructure to your need</h4>
                                <p className="text-muted">Empower your development team to innovate and scale without limitations. With our platform, you can effortlessly scale your build infrastructure to match your evolving needs, ensuring optimal performance and efficiency at every stage of your development lifecycle.</p>
                                {/* <ul className="list-unstyled text-muted">
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul> */}
                                <Link to="#" className="mt-3 text-primary">Learn more<i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>

                        <Col lg={6} md={6} className="order-1 order-md-2">
                            <img src={Feature2} className="img-fluid shadow-md rounded-md" alt="" />
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <Row className="justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h3 className="title mb-3">Key features</h3>
                                <p className="text-muted mx-auto para-desc mb-0">Develop games faster by optimizing CI/CD pipeline and developement process.</p>
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
                                        <Link to="#" className="title text-dark h5">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.description}</p>
                                        <Link to="#" className="text-dark title">Read More <i className="uil uil-arrow-right"></i> </Link>
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