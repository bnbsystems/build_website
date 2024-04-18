import React from "react";
import { Container, Row } from "reactstrap";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useTranslation } from "react-i18next";

export default function Terms() {
    const { t } = useTranslation()
    return (
        <>
            <div>
                <Navbar />
                <div className="position-relative">
                    <div className="shape marketing-hero overflow-hidden text-light"></div>
                </div>

                <section className="mt-5 pt-md-5">
                    <Container>
                        <Row className="row justify-content-center">
                            <div className="title-heading mt-5 mb-5">
                                    <h4 className="heading my-3">{t('terms_and_conditions_page.title')}</h4>
                                    <p className="para-desc mx-auto text-muted"></p>
                            </div>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        </>
    )
}