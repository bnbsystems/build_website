import React, { Component, useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const submitUrl = `${process.env.REACT_APP_API_URL}/contact`;
export default function Contact() {
    const [formState, setFormState] = useState({})
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
          return;
        }
        const token = await executeRecaptcha('submit');
    
        return token;
      }, [executeRecaptcha]);

    const updateFormField = (e) => {
        const state = { 
            ...formState,
            [e.target.name]: e.target.value
        }

        setFormState(state)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const token = await handleReCaptchaVerify()
        const request ={
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                ...formState, 
                recaptchaToken: token
            }),
        }
        if(typeof submitUrl !== 'string' || submitUrl.trim().length === 0){
            return
        }
        fetch(submitUrl, request).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }}).catch(error =>{

            })
    }

    useEffect( () => {
        handleReCaptchaVerify();
      }, [handleReCaptchaVerify]);

    return (
        <>
            {/* Start Contact  */}
            <section className="section" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Contact us</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Get in touch with us to consult soultion that will meet your needs.</p>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="align-items-center">
                        <Col lg={8} md={6} className="order-md-2 order-1 mt-4 pt-2">
                            <div className="p-4 rounded shadow bg-white">
                                <form onSubmit={onSubmit} name="myForm">
                                    <p className="mb-0" id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <Row>
                                        <Col md={6}>
                                            <div className="mb-4">
                                                <input onChange={updateFormField} name="name" id="name" type="text" className="form-control" placeholder="Name :" required />
                                            </div>
                                        </Col>

                                        <Col md={6} >
                                            <div className="mb-4">
                                                <input onChange={updateFormField} name="email" id="email" type="email" className="form-control" placeholder="Email :" required />
                                            </div>
                                        </Col>

                                        <div className="col-12">
                                            <div className="mb-4">
                                                <input onChange={updateFormField} name="subject" id="subject" className="form-control" placeholder="Subject :" required />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-4">
                                                <textarea onChange={updateFormField} name="message" id="message" rows={4} className="form-control" placeholder="Message :" required />
                                            </div>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-12 text-end">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </Row>
                                </form>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="col-12 order-md-1 order-2 mt-4 pt-2">
                            <div className="me-lg-4">
                                <div className="d-flex">
                                    <div className="icons text-center mx-auto">
                                        <i className="uil uil-phone d-block rounded h4 mb-0"></i>
                                    </div>

                                    <div className="flex-1 ms-3">
                                        <h5 className="mb-2">Phone</h5>
                                        {/* <Link to="tel:+152534-468-854" className="text-muted">+152 534-468-854</Link> */}
                                    </div>
                                </div>

                                <div className="d-flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <i className="uil uil-envelope d-block rounded h4 mb-0"></i>
                                    </div>

                                    <div className="flex-1 ms-3">
                                        <h5 className="mb-2">Email</h5>
                                        {/* <Link to="mailto:contact@example.com" className="text-muted">contact@example.com</Link> */}
                                    </div>
                                </div>

                                <div className="d-flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <i className="uil uil-map-marker d-block rounded h4 mb-0"></i>
                                    </div>

                                    <div className="flex-1 ms-3">
                                        <h5 className="mb-2">Location</h5>
                                        {/* <p className="text-muted mb-2">C/54 Northwest Freeway, Suite 558, Houston, USA 485</p> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* End Contact  */}
        </>
    )
}