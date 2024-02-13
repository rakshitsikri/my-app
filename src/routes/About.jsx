import React, { useEffect, useRef } from 'react';
import aboutimg from "../images/971.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const startWidth = '500'; // Specify the start width
  const endWidth = '100%'; // Specify the end width

  gsap.set(imageRef.current, { width: startWidth});
  gsap.set(textRef.current, { opacity: 0 });

    useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '0% 0%',
        end: '50% 50%',
        markers:true,
        pin: true,
        scrub: 2, 
      },
    });
  

    timeline.to(imageRef.current, { width: endWidth, duration: 1 });
    timeline.from(textRef.current, { opacity: 0, duration: 1 });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
      

    return (
        <section>
            <div className='container' ref={containerRef}>
              <div className="position-relative">
                <div className='about_img image' ref={imageRef}>
                    <img src={aboutimg} alt="" style={{ width: '100%' }} className='scroll_img' style={{ width: '100%' }} />
                </div>
                <h1 className='about_text animated-text' ref={textRef}>I'm a UI/UX designer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.</h1>

              </div>
            </div>
        </section>
    );
};


export default About;