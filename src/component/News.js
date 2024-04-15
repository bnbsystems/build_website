import React from "react";
import { Col, Container, Card, Row, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import Blo1Image from "../assets/images/blog/1.jpg";
import Blo2Image from "../assets/images/blog/2.jpg";
import Blo3Image from "../assets/images/blog/3.jpg";


export default function News() {
    return (
        <>
            {/* Start Blog  */}
            <section className="section bg-light" id="blog">
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Articles</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Discover the power of our innovative solutions and elevate your developement experience.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="blog blog-primary shadow rounded overflow-hidden border-0">
                                <div className="blog-image position-relative overflow-hidden">
                                    <img src={Blo1Image} className="img-fluid" alt="" />
                                </div>

                                <CardBody className="content p-0">
                                    <div className="p-4">
                                        <Link to="#" className="h5 title text-dark d-block mb-0">Benefits of build servers</Link>
                                        <p className="text-muted mt-2 mb-0">Learn about the adventages of using build servers in development process.</p>

                                        <div className="mt-3">
                                            <Link to="#" className="link text-dark">Read More <i className="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="blog blog-primary shadow rounded overflow-hidden border-0">
                                <div className="blog-image position-relative overflow-hidden">
                                    <img src={Blo2Image} className="img-fluid" alt="" />
                                </div>

                                <CardBody className="content p-0">
                                    <div className="p-4">
                                        <Link to="#" className="h5 title text-dark d-block mb-0">Automated deployments</Link>
                                        <p className="text-muted mt-2 mb-0">Explore how automated deployments can elevate game quality.</p>

                                        <div className="mt-3">
                                            <Link to="#" className="link text-dark">Read More <i className="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="blog blog-primary shadow rounded overflow-hidden border-0">
                                <div className="blog-image position-relative overflow-hidden">
                                    <img src={Blo3Image} className="img-fluid" alt="" />
                                </div>

                                <CardBody className="content p-0">
                                    <div className="p-4">
                                        <Link to="#" className="h5 title text-dark d-block mb-0">Get feedback, improve communication</Link>
                                        <p className="text-muted mt-2 mb-0">Improve teamwork and communication by getting build feedback and error alerts.</p>

                                        <div className="mt-3">
                                            <Link to="#" className="link text-dark">Read More <i className="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* End Blog  */}
        </>
    )
}