import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useTranslation } from "react-i18next";

const submitUrl = `${process.env.REACT_APP_API_URL}/contact`;
export default function Contact() {
    const formRef = useRef(null);
    const [formState, setFormState] = useState({})
    const [submitError, setSubmitError] = useState(false)
    const [wasSubmited, setWasSubmited] = useState(false)
    const { t } = useTranslation();
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
        setSubmitError(false)
        setWasSubmited(false)
        const token = await handleReCaptchaVerify()
        const request = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                ...formState, 
                captchaToken: token ?? ''
            }),
        }
        if(typeof submitUrl !== 'string' || submitUrl.trim().length === 0){
            return
        }
        fetch(submitUrl, request).then(response => {
            if (!response.ok) {
                throw new Error('Form submission failed');
            }
            setWasSubmited(true)
            formRef.current.reset();
        }).catch(error =>{
            setSubmitError(true)
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
                                <h4 className="title mb-3">{t('landing_page.contact_form.title')}</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">{t('landing_page.contact_form.description')}</p>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="align-items-center">
                        <Col lg={8} md={6} className="order-md-2 order-1 mt-4 pt-2">
                            <div className="p-4 rounded shadow bg-white">
                                <form ref={formRef} onSubmit={onSubmit} name="myForm">
                                    <p className="mb-0" id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <Row>
                                        <Col md={6}>
                                            <div className="mb-4">
                                                <input onChange={updateFormField} maxLength={60} name="name" id="name" type="text" className="form-control" placeholder={t('landing_page.contact_form.form_fields.name')} required />
                                            </div>
                                        </Col>

                                        <Col md={6} >
                                            <div className="mb-4">
                                                <input onChange={updateFormField} maxLength={60} name="email" id="email" type="email" className="form-control" placeholder={t('landing_page.contact_form.form_fields.email')} required />
                                            </div>
                                        </Col>

                                        <div className="col-12">
                                            <div className="mb-4">
                                                <input onChange={updateFormField} maxLength={60} name="subject" id="subject" className="form-control" placeholder={t('landing_page.contact_form.form_fields.subject')} required />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-4">
                                                <textarea onChange={updateFormField} maxLength={600} name="message" id="message" rows={4} className="form-control" placeholder={t('landing_page.contact_form.form_fields.message')} required />
                                            </div>
                                        </div>
                                        <div className="mt-3 col-12 checkbox-field">
                                            <input
                                                className="checkbox"
                                                type={"checkbox"}
                                                name={"consent-to-contact"}
                                                id={"consent-to-contact"}
                                                required={true}
                                                
                                            />
                                            <div className="divider" />
                                            <label style={{display: "inline-block"}} htmlFor="consent-to-contact">{t('landing_page.contact_form.form_fields.consent_to_contact')}</label>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-12 mt-3 text-end">
                                            <p style={submitError ? {color: "red"}: {color: "green"}}>
                                                {wasSubmited && t('landing_page.contact_form.success_message')}
                                                {submitError && t('landing_page.contact_form.error_message')}
                                            </p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-12 mt-3 text-end">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary">{t('landing_page.contact_form.form_fields.send')}</button>
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
                                        <h5 className="mb-2">{t('common.phone')}</h5>
                                        {/* <Link to="tel:<*insert-phone*>" className="text-muted"></Link> */}
                                    </div>
                                </div>

                                <div className="d-flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <i className="uil uil-envelope d-block rounded h4 mb-0"></i>
                                    </div>

                                    <div className="flex-1 ms-3">
                                        <h5 className="mb-2">{t('common.email')}</h5>
                                        {/* <Link to="mailto:<*insert-email*>" className="text-muted"></Link> */}
                                    </div>
                                </div>

                                <div className="d-flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <i className="uil uil-map-marker d-block rounded h4 mb-0"></i>
                                    </div>

                                    <div className="flex-1 ms-3">
                                        <h5 className="mb-2">{t('common.location')}</h5>
                                        {/* <p className="text-muted mb-2"></p> */}
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