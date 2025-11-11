import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonails = [
        {
            'img': imgOne,
            'name': 'Ashley B.',
            'description' : `I loved my experience with Dr. Al. He is the most gentle and caring dentist I've ever been to. Very recommended! I got a tooth extraction and he did everything possible to make sure I was very well taken care of. Amazing staff as well.`,
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Julie B.',
            'description' : 'Really friendly and a great dentist! This may have actually been my least painful experience at the dentist. I was seen for a cleaning after hours (which was wonderful for me) and was in and out in 25 minutes. THe staff was really friendly.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Leslie L.',
            'description' : 'I made an appointment here the day before I had an opening in my schedule. I got there about 10 or 15 minutes early, and after I finished up my paperwork, they took me right into an examination room.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgOne,
            'name': 'Christopher M.',
            'description' : `I had a toothache for weeks until I couldn't take it anymore. I started calling local dentists from my insurance list and this place was my second call. I called at 2 and they said to come in at 2:30, wow! Staff was friendly!`,
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        }
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                        subTitle="Patient Reviews"
                        title="Patient Reviews"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">We Accept Most Insurances and MassHealth for All Ages.</p>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;
