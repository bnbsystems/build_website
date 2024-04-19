import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ArticleTemplate ({title, description, image, imageAlt = "", children}) {
    return (
        <>
            <Navbar />
            <section className="section">
            <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <img src={image} className="img-fluid shadow-md rounded-md" alt={imageAlt} />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">{title}</h4>
                                <p className="text-muted">{description}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mb-5">
                <Container>
                        <Row className=" justify-content-center">
                            <div className="col-lg-12">
                                {children}
                            </div>
                        </Row>
                    </Container>
            </section>
            <Footer />
        </>
    )
}