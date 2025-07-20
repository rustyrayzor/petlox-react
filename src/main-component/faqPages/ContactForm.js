import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({ className: 'errorMessage' }));
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-validation-active" id="contact-form">
            <div className="half-col">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                />
                {validator.message('name', formData.name, 'required|alpha_space')}
            </div>
            <div className="half-col">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email Address"
                />
                {validator.message('email', formData.email, 'required|email')}
            </div>
            <div className="half-col">
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Subject"
                />
                {validator.message('subject', formData.subject, 'required')}
            </div>
            <div>
                <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Question"
                />
                {validator.message('message', formData.message, 'required')}
            </div>
            <div className="submit-btn-wrapper">
                <button type="submit" className="theme-btn color-9">Submit Now</button>
                <div id="loader">
                    <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                </div>
            </div>
            {submitted && <p className="success-message">Thank you</p>}
        </form>

    );
};

export default ContactForm;
