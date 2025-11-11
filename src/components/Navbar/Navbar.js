import React from 'react';
import './Navbar.scss';
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';
import { getServicesMenu } from '../../utils/services';

const Navbar = () => {

    const servicesMenu = getServicesMenu().map(service => ({
        name: service.title,
        path: `/services/${service.slug}`
    }));

    const navbarItems = [
        {
            name: 'Welcome',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Services',
            path: '/services',
            children: servicesMenu,
        },
        {
            name: 'Dental Emergency',
            path: '/contact',
        },
        {
            name: 'New Patients',
            path: '/contact',
        },
        {
            name: 'Blog',
            path: '/blogs',
        },
    ];

    const languages = [
        { code: 'ar', label: 'AR' },
        { code: 'en', label: 'EN' },
        { code: 'hi', label: 'HI' },
        { code: 'pt', label: 'PT' },
        { code: 'ru', label: 'RU' },
        { code: 'es', label: 'ES' }
    ];

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className={`nav-item ${navSingle.children ? 'dropdown' : ''}`} key={navSingle.name}>
                                        <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                        {
                                            navSingle.children && (
                                                <div className="dropdown-menu">
                                                    {
                                                        navSingle.children.map(child => (
                                                            <Link key={child.path} className="dropdown-item" to={child.path}>
                                                                {child.name}
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    </li>
                                    ) 
                                }
                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="d-flex align-items-center">
                                <div className="theme-btn me-3">
                                    <Link to="/contact">Book Appointment</Link>
                                </div>
                                <div className="language-toggle btn-group" role="group">
                                    {languages.map(({ code, label }) => (
                                        <button
                                            key={code}
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => window.translate && window.translate(code)}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
