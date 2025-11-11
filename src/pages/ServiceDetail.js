import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Appointment from '../sections/Appointment/Appointment';
import { getServiceBySlug } from '../utils/services';
import './ServiceDetail.scss';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <>
                <Navbar />
                <section className="service-detail-section pb-70">
                    <div className="container">
                        <div className="service-detail-header text-center">
                            <h1>Service Not Found</h1>
                            <p>The service you are looking for is not available. Please return to the services page and choose a different treatment.</p>
                            <div className="theme-btn">
                                <Link to="/services">Back to Services</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <section className="service-detail-section pb-70">
                <div className="container">
                    <div className="service-detail-header">
                        <span>Dental Services</span>
                        <h1>{service.title}</h1>
                        {service.intro?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {service.sections?.map((section) => (
                        <article className="service-detail-block" key={`${service.slug}-${section.heading}`}>
                            <h2>{section.heading}</h2>
                            {section.body?.map((block, index) => {
                                if (block.type === 'list') {
                                    return (
                                        <ul key={`${section.heading}-list-${index}`}>
                                            {block.items.map((item, idx) => (
                                                <li key={`${section.heading}-list-${index}-${idx}`}>{item}</li>
                                            ))}
                                        </ul>
                                    );
                                }

                                return <p key={`${section.heading}-p-${index}`}>{block.text}</p>;
                            })}
                        </article>
                    ))}

                    <div className="service-detail-cta">
                        <div className="theme-btn">
                            <Link to="/contact">Book an appointment</Link>
                        </div>
                        <a href="tel:5083578800">Call (508) 357-8800</a>
                        <a href={service.sourceUrl} target="_blank" rel="noreferrer">View original service page</a>
                    </div>
                </div>
            </section>
            <Appointment />
            <Footer />
        </>
    );
};

export default ServiceDetail;
