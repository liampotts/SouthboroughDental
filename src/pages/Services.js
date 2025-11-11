import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Appointment from '../sections/Appointment/Appointment';
import { getAllServices, getServicePreview } from '../utils/services';
import './ServicesPage.scss';

const Services = () => {
    const services = getAllServices();

    return (
        <>
            <Navbar />
            <section className="services-overview-section pb-70">
                <div className="container">
                    <div className="section-heading text-center">
                        <span>Dental Services</span>
                        <h1>Comprehensive Dental Care in Southborough, MA</h1>
                        <p>Explore the full range of services offered at Southborough Dental Partners. Each page below mirrors the information on the live site so patients can learn more about every treatment before booking an appointment.</p>
                    </div>

                    <div className="row g-4">
                        {
                            services.map(service => (
                                <div className="col-lg-6" key={service.slug}>
                                    <div className="service-overview-card">
                                        <div className="service-overview-content">
                                            <h3><Link to={`/services/${service.slug}`}>{service.title}</Link></h3>
                                            <p>{getServicePreview(service)}</p>
                                        </div>
                                        <div className="service-overview-actions">
                                            <Link className="theme-link" to={`/services/${service.slug}`}>Learn More</Link>
                                            <a className="theme-link" href={service.sourceUrl} target="_blank" rel="noreferrer">View Source</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Appointment />
            <Footer />
        </>
    );
};

export default Services;
