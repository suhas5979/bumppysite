import React, { Component } from 'react';
import ContactInfoContent from './ContactInfoContent';
import ContactForm from '../Contact/ContactForm';

class ContactContent extends Component {
    render() {
        return (
            <>
                <div className="contact-area ptb-50">
                    <div className="container">
                        <div className="section-title">
                            <h2>Drop us a message for any query</h2>
                            <div className="bar"></div>
                            <p>Hey, Are you interested in our Payment Services and want to know more about our products</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <ContactInfoContent />
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </div>
            </>
        );
    }
}

export default ContactContent;