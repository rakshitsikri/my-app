import react from 'react';
import aboutimg from "../images/971.jpg";
import { styled } from 'styled-components';


const Stayinformed = () => {
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
                                <p>Explore the creative and technical aspects of web animation, and discover how it can enhance user engagement and bring your website to life.</p>
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
                                <p>Unlock the secrets of effective SEO optimization with practical tips and strategies to improve your website's visibility and organic search rankings.</p>
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
                                <p>Stay ahead of the curve with an overview of the latest web design trends shaping hte digital landscape 2023, and learn how to implement them in ypur projects.</p>
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
                                <p>Dive into the fundamentals of javascript and gain mastery over the core concepts, syntax, and techniques to build dynamic and interactive web experience.</p>
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

