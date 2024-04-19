import React from "react";
import { Container, Row } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function FeatureTemplate ({title, description, children}) {
    return (
        <>
            <Navbar />
            <section className="section">
                <Container>
                        <Row className="mt-5 pt-5 justify-content-center">
                            <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                <div className="title-heading">
                                    <h4 className="heading my-3">{title}</h4>
                                    <p className="para-desc mx-auto text-muted">{description}</p>
                                </div>
                            </div>
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