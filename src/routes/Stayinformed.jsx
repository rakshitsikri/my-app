import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)



const Stayinformed = () => {

    useEffect(() => {
        const headings = gsap.utils.toArray(".expander");
        headings.forEach((title) => {
            gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: "top center",
                end: "+=200",
                scrub: 5,
                markers: false,
                toggleClass:  "title-selected",
            }
            })
        });
    }, []);



    return (
        <section className='pt-0'>
            <marquee direction="left" behavior="scroll" scrollamount="20" className='stay_text'>Stay Informed, Stay Connected.</marquee>
            <div className='container'>
                <div className='stay_main'>
                    <ul>
                        <li>
                            <div className='stay_left'>
                                <h5>13 June 2023</h5>
                            </div>
                            <div className='stay_center'>
                                <h5>UX and UI, Design, Javascript</h5>
                            </div>
                            <div className='stay_right'>
                                <h3>The Art Of Web Animation</h3>
                                <div className='expander'>
                                    <p className='text-animtn'>Explore the creative and technical aspects of web animation, and discover how it can enhance user engagement and bring your website to life.</p>
                                </div>
                                <a href="/">Read article</a>
                            </div>
                        </li>
                        <li>
                            <div className='stay_left'>
                                <h5>13 June 2023</h5>
                            </div>
                            <div className='stay_center'>
                                <h5>Marketing, UX and UI, Design</h5>
                            </div>
                            <div className='stay_right'>
                                <h3>SEO Optimization Tips</h3>
                                <div className='expander'>
                                    <p className='text-animtn'>Unlock the secrets of effective SEO optimization with practical tips and strategies to improve your website's visibility and organic search rankings.</p>
                                </div>
                                <a href="/">Read article</a>
                            </div>
                        </li>
                        <li>
                            <div className='stay_left'>
                                <h5>13 June 2023</h5>
                            </div>
                            <div className='stay_center'>
                                <h5>UX and UI, Design, Inspiration</h5>
                            </div>
                            <div className='stay_right'>
                                <h3>Web Design Trends 2023</h3>
                                <div className='expander'>
                                    <p className='text-animtn'>Stay ahead of the curve with an overview of the latest web design trends shaping hte digital landscape 2023, and learn how to implement them in ypur projects.</p>
                                </div>
                                <a href="/">Read article</a>
                            </div>
                        </li>
                        <li>
                            <div className='stay_left'>
                                <h5>13 June 2023</h5>
                            </div>
                            <div className='stay_center'>
                                <h5>UX and UI, Design, Web Development</h5>
                            </div>
                            <div className='stay_right'>
                                <h3>Web Design Trends 2023</h3>
                                <div className='expander'>
                                    <p className='text-animtn'>Dive into the fundamentals of javascript and gain mastery over the core concepts, syntax, and techniques to build dynamic and interactive web experience.</p>
                                </div>
                                <a href="/">Read article</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};


export default Stayinformed;

