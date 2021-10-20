import React from 'react';
import { Accordion } from 'react-bootstrap';

const WhyChooseUs = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center">Why Choose Us</h2>
            <p className="text-center"><span className="text-secondary">Not Different</span> <span className="text-info">Much Better</span></p>
            <div className="row px-5 my-3 fw-bold">
                Established by Dr Prathap C Reddy in 1983, Medi-health Care has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Medi-health Care Hospitals has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>We are always care full to our patient and service</Accordion.Header>
                            <Accordion.Body>
                                Patient satisfaction is only an indirect or a proxy indicator of the quality of doctor or hospital performance.[17-18] Delivery of patient-focussed care requires that we provide care in a particular way, not just sometimes or usually, but always. It must be every patient every time.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Book and appoinment with any specialist anytime</Accordion.Header>
                            <Accordion.Body>
                                You can book your appointment any time any place. also you can change your appointment time as your suitable time.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>We offer lot of service in a best price</Accordion.Header>
                            <Accordion.Body>
                                We provided our best service in resonable price
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Online payment system with different method</Accordion.Header>
                            <Accordion.Body>
                                You can pay your payment as your choose option. we receive payment by cash and all online Transaction method. you are free to pay any way
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>7,000+ Healing Hands</Accordion.Header>
                            <Accordion.Body>
                                Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Most Advanced Healthcare Technology</Accordion.Header>
                            <Accordion.Body>
                                Apollo Hospitals has been the pioneer in bringing ground-breaking healthcare technologies to India.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-md-6 mt-5 mt-lg-0">
                    <img className="img-fluid" src="https://pcaedu.in/wp-content/uploads/2019/09/why-us-800x400.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;