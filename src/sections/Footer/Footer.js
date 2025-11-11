import React from 'react';
import logo from '../../assets/logo.png';
import './Footer.scss';
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        { 'name' : 'Welcome', 'link' : '/' },
        { 'name' : 'About', 'link' : '/about' },
        { 'name' : 'Services', 'link' : '/services' },
        { 'name' : 'Dental Emergency', 'link' : '/contact' },
        { 'name' : 'New Patients', 'link' : '/contact' },
        { 'name' : 'Contact', 'link' : '/contact' },
        { 'name' : 'Book Appointment', 'link' : '/contact' }
    ];

    const footerContacts = [
        {
            'title': 'Phone, Fax & Email',
            'info': ['Phone: (508) 357-8800', 'Fax: (508) 624-0191', 'Email: [email protected]'],
            'icon': call
        },
        {
            'title': 'Operating Hours',
            'info': ['Monday - Friday: 9am - 5:30pm', 'Saturday: 10:00am - 2:00pm'],
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
                        <p>Providing top-notch dental care in Southborough, MA. Visit Southborough Dental Partners for compassionate, experienced, and comprehensive dental services.</p>

                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li key={singleMenu.name}><Link to={singleMenu.link}>{singleMenu.name}</Link></li>)
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
                        <p>Southborough Dental Partners &copy; 2025. All Rights Reserved</p>
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
