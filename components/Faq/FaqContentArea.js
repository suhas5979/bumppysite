import React, { Component } from 'react';
import FaqTextContent from './FaqTextContent';
import FaqContactForm from './FaqContactForm';
import ContactForm from '../Contact/ContactForm';

class FaqContentArea extends Component {
    render() {
        return (
            <div className="faq-area ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="faq-content">
                                <div className='faq1'>Frequently Asked Questions</div>
                                <div className="bar"></div>
                                <p className='faq2'>Have a question that has not been answered below? Feel free to send us an email at support@bumppy.com and we shall pop the answer up here for all to see</p>
                                <p className='faq2'>Bumppy Payments is the Payments solution in India that allows businesses to accept, process and disburse Payments with its product suite.</p>

                                <div className="faq-image">
                                    <img src="/images/faq.png" alt="Faq image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <FaqTextContent />
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        );
    }
}

export default FaqContentArea;