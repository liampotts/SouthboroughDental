import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Popular Dental Treatments" subTitle="Popular Dental Treatments" description="Southborough Dental Partners offers dental treatments for the entire family."/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>We invite you to explore our website and learn more about our services. New patients are welcome and most insurances are accepted.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

            <div className="services-link text-center">
                <Link to='/services'>
                    View all dental services
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </section>
    );
};

export default Services;
