import React, { Component } from 'react';

class ContactInfoContent extends Component {
    render() {
        return (
            <div className="contact-info">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <span>Address</span>
                        <a   href="https://goo.gl/maps/Nrwe5TeZpsut9ivP9"
                        target="_blank"> B-218 Ithum Tower<br/>
                        Second Floor
                        Sector-62, Noida</a>
                    
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span>Email</span>
                        <a href="mailto:support@Bumppypay.com">support@bumppy.com</a>
                        {/* <a href="mailto:support@Bumppypay.com">support@Bumppy.com</a> */}
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <span>Phone</span>
                        <a href="tel:+(91) 81-300-96176">+ (91) 81-300-96176</a>
                        {/* <a href="tel:+(91)9891167366">+ (91) 9891167366</a> */}
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactInfoContent;