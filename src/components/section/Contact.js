import React from 'react';
import { contact, social } from '../../profile';

const Contact = () => {
    return (
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                </div>
                <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center flex-column">
                    <div className="social-icons">
                        {social.linkedin && (
                            <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        )}
                        {social.facebook && (
                            <a title="Visit Facebook profile" rel="noopener noreferrer" target="_blank" href={social.facebook}>
                                <i className="fab fa-facebook"></i>
                            </a>
                        )}
                        {social.twitter && (
                            <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}>
                                <i className="fab fa-twitter"></i>
                            </a>
                        )}
                        {social.instagram && (
                            <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        )}
                        {social.github && (
                            <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}>
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                        {social.resume && (
                            <a title="Download Resume" href={social.resume} download>
                                <i className="fas fa-download"></i>
                            </a>
                        )}
                    </div>
                </div>
        </div>
    );
};

export default Contact;
