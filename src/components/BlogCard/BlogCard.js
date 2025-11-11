import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({blog}) => {
    const {title, img, description, category, url, date} = blog;
    const day = date?.day || '23';
    const month = date?.month || 'Jan';

    return (
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="blog-card">
                <div className="blog-img">
                    <img src={img} alt="blog"/>
                    <div className="date">
                        <h6>{day}</h6>
                        <p>{month}</p>
                    </div>
                </div>
                <div className="blog-text">
                    <span><Link to="/">{category}</Link></span>
                    <h3><Link to={`/blog/${url}`}>{title}</Link></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
