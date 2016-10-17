import React from 'react';
import SendMessage from './SendMessage';

/**
 * This stateless functional React component is responsible for rendering the ContactUs section.
 * @returns {XML}
 * @constructor
 */
const ContactUs = () => {
    return (
        <section id="contactUs">
            <div className="container">
                <h1 className="headerTitle">Contact Us</h1>
                <SendMessage/>
            </div>
        </section>
    );
};

export default ContactUs;
