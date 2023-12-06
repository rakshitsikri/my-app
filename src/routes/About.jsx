import React, { useEffect, useRef } from 'react';
import aboutimg from "../images/971.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);





const About = () => {

  const imageRef = useRef(null); // Create a ref for the image element
  const startWidth = 500; // Specify the start width
  const endWidth = '100%'; // Specify the end width

    useEffect(() => {
        // Define the animation
        const animation = gsap.from(imageRef.current, {
            width: startWidth, // Start with the specified start width
            scrollTrigger: {
              trigger: imageRef.current, // Use the image as the trigger
              start: '0% 50%',
              end: '50% 50%',
              scrub: true,
              pin:false,
              markers:true,
              toggleActions: "play",
            },
          });
      
          // Set the end width using a second animation
          gsap.to(imageRef.current, {
              width: endWidth,
              scrollTrigger: {
              trigger: imageRef.current,
              start: 'top center',
              end: 'center center',
              scrub: 5,
              anticipatePin: 1,
              toggleActions: "play",
            },
          });
      
          return () => {
            animation.kill();
          };
        }, []);
      

        useEffect(() => {
          const textElement = document.querySelector('.animated-text');

            gsap.fromTo(
              textElement,
              {
                opacity: 0,
                y: 100,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: textElement,
                  start: 'top center', // When to start the animation
                  end: 'bottom center', // When to end the animation
                  scrub: true, // Smoothly animates the text as you scroll
                },
              }
            );
          }, []);



          

      

    return (
        <section>
            <div className='container'>
                <div className='about_img image' ref={imageRef}>
                    <img src={aboutimg} alt="" style={{ width: '100%' }} className='scroll_img' style={{ width: '100%' }} />
                </div>
                <h1 className='about_text animated-text'>I'm a UI/UX designer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.</h1>
            </div>
        </section>
    );
};


export default About;

  