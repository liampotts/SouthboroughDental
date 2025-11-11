import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Patient Visit *</label>
                        <div className="d-flex gap-3 flex-wrap">
                            <label className="mb-0">
                                <input type="radio" name="patient_visit" defaultChecked /> New Patient
                            </label>
                            <label className="mb-0">
                                <input type="radio" name="patient_visit" /> Existing Patient
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Your Name *</label>
                        <input type="text" className="form-control" placeholder="First and Last name" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Phone Number *</label>
                        <input type="tel" className="form-control" placeholder="Your Phone Number" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Your Email *</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Preferred Date</label>
                        <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Which day(s) of the week are you available?</label>
                        <div className="weekday-options">
                            {['Monday','Tuesday','Wednesday','Thursday','Friday','No Preference'].map(day => (
                                <label key={day}>
                                    <input type="checkbox" /> {day}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Preferred Time of Day</label>
                        <select className="form-control">
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                            <option>No Preference</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Is there a time that works best for you?</label>
                        <input type="time" className="form-control" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>How did you hear of us? *</label>
                        <select className="form-control">
                            <option>Google</option>
                            <option>Facebook</option>
                            <option>Word of Mouth</option>
                            <option>Past patient</option>
                            <option>Referral</option>
                            <option>Yelp</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Is there anything else you'd like us to know?</label>
                        <textarea className="form-control" placeholder='Add a message' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" className="btn appointment-btn">Book an appointment</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Call Now</p>
                            <h6>(508) 357-8800</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
