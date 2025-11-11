import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="Meet Our Southborough Dentist Today"
                                title="Southborough Dental Partners offers dental treatments for the entire family."
                                description="Improve your smile today! Our office is well-equipped with the latest technology to provide quality care."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Dr. Al Khateeb
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Dr. Ali Alrubaye
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    New patients are welcome and most insurances are accepted.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;
