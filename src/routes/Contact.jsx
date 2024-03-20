import React, { useState, useEffect } from 'react';
// import './Parallax.css';



const Contact = () => {



    return (
    <>
        <section className='bg_white'>
            <div className="container">
                <h4 class="text-center mb-3">[Contact Us]</h4>
                <div className='row'>
                    <div className='col-md-6'>

                    </div>
                    <div className='col-md-6'>
                        <h2 className='contact_heading'>Have Any Project on Your Mind?</h2>
                        <p>Great! We're excited to hear from you and let's start something</p>
                        <ul className='contact_form'>
                            <li>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Full name</label>
                                </div>
                            </li>
                            <li>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                            </li>
                            <li className='w-100'>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Website link</label>
                                </div>
                            </li>
                            <li className='w-100'>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control ht100" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">How can we help you?</label>
                                </div>
                            </li>
                        </ul>
                        <a href="#" class="snd_btn">Send Message</a>
                    </div>
                </div>
            </div>
        </section> 
    </>
    );
};


export default Contact;

