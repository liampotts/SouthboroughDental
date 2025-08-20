import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'About Us',
            'link' : '/'
        },
        {
            'name' : 'Dental Services',
            'link' : '/'
        },
        {
            'name' : 'Dentist',
            'link' : '/'
        },
        {
            'name' : 'Blogs',
            'link' : '/'
        },
        {
            'name' : 'FAQs',
            'link' : '/'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '(508) 357- 8800',
            'icon': call
        },
        {
            'title': 'Open Hour',
            'info': ['Monday - Friday: 8 AM - 5:30 PM', 'Saturday: 10 AM - 2 PM'],
            'icon': time
        },
        {
            'title': 'Clinic Address',
            'info': '21 Turnpike Road Southborough, MA 01772',
            'icon': location    
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Southborough Dental is a top-rated local practice for cosmetic, preventative, and restorative dentistry</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list" key={footerContact.title}>
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    {Array.isArray(footerContact.info) ? (
                                                        footerContact.info.map((info, index) => (
                                                            <h5 key={index}>{info}</h5>
                                                        ))
                                                    ) : (
                                                        <h5>{footerContact.info}</h5>
                                                    )}
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Southborough Dental. All Right Reserved</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terms of Use</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;