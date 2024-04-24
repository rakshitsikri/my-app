import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MyComponent = () => {
  const containerRef = useRef(null);
  const scrollDistRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const scrollDist = scrollDistRef.current;
    const boxes = [];

    // Define an array of random text options
    const randomTextOptions = ["Museo Camera", "FGIPL", "NPI Group"];

    const makeBoxes = (n) => {
      for (let i = 0; i < n; i++) {
        const b = document.createElement('div');
        boxes.push(b);
        container.appendChild(b);
      }
    }

    makeBoxes(30);

    gsap.to(container, 0.4, { perspective: 200, backgroundColor: '#fff' });

    boxes.forEach((b, i) => {
      const randomText = randomTextOptions[Math.floor(Math.random() * randomTextOptions.length)];

      gsap.set(b, {
        left: '50%',
        top: '50%',
        margin: -300,
        width: 600,
        height: 400,
        backgroundColor: '#fff',
        color: '#000',
        textAlign: 'center',
        lineHeight: '300px',
        fontSize: '6rem',
        clearProps: 'transform',
        backfaceVisibility: 'hidden',
        innerHTML: randomText
      });

      b.tl = gsap.timeline({ paused: true, defaults: { immediateRender: true } })
        .fromTo(b, {
          scale: 0.3,
          rotationX: i / boxes.length * 360,
          transformOrigin: "50% 50% -500%"
        }, {
          rotationX: '+=360',
          ease: 'none'
        })
        .timeScale(0.05);

      b.addEventListener('mouseover', (e) => { gsap.to(e.currentTarget, { opacity: 0.5, scale: 0.36, duration: 0.4, ease: 'expo' }); });
      b.addEventListener('mouseout', (e) => { gsap.to(e.currentTarget, { opacity: 1, scale: 0.3, duration: 0.2, ease: 'back.out(3)', overwrite: 'auto' }); });
      b.addEventListener('click', (e) => { window.open(e.currentTarget.style.backgroundImage.slice(5, -2), '_blank'); });
    });

    ScrollTrigger.create({
      trigger: scrollDist,
      start: "top top",
      end: "bottom bottom",
      onRefresh: self => {
        boxes.forEach((b, i) => { gsap.set(b.tl, { progress: self.progress }); })
      },
      onUpdate: self => {
        boxes.forEach((b, i) => { gsap.to(b.tl, { progress: self.progress }); })
      }
    });
  }, []);

  return (
    <div className='scrolldiv'>
      <div id="scrollDist" ref={scrollDistRef}></div>
      <div id="container" ref={containerRef}></div>
    </div>
  );
}

export default MyComponent;






// const Portfolio = () => {


//     const [position, setPosition] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (e) => {
//         setPosition({ x: e.clientX, y: e.clientY });
//     };

//     useEffect(() => {
//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//         window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);



//     return (
//     <>
//         <section>
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-md-12'>
//                         <h4 className='text-center mb-3 test-white'>[My Work]</h4>
//                         <div className='project_name text-center'>
//                             <a href="/" className='portfolio_name'>
//                                 <span>Museo Camera</span>
//                                 <div className='portfolio_img parallax-content' style={{ transform: `translate(-${position.x / 10}px, -${position.y / 10}px)`,}}>
//                                     <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
//                                 </div>
//                             </a>
//                             <a href="/" className='portfolio_name'>
//                                 <span>Forms Design Studio</span>
//                                     <div className='portfolio_img parallax-content' style={{ transform: `translate(-${position.x / 10}px, -${position.y / 10}px)`,}}>
//                                         <img src='https://www.indiainternets.com/images/image-portfolio/1100402303_formsdesign-thamb.jpg' />
//                                     </div>
//                                 </a>
//                             <a href="/" className='portfolio_name'>
//                                 <span>IOC Phinergy</span>
//                                     <div className='portfolio_img parallax-content' style={{ transform: `translate(-${position.x / 10}px, -${position.y / 10}px)`,}}>
//                                         <img src='https://www.indiainternets.com/images/image-portfolio/1780970128_iocphinergy-thamb.jpg' />
//                                     </div>
//                                 </a>
//                             <a href="/" className='portfolio_name'>
//                                 <span>Prop Bridge</span>
//                                     <div className='portfolio_img parallax-content' style={{ transform: `translate(-${position.x / 10}px, -${position.y / 10}px)`,}}>
//                                         <img src='https://www.indiainternets.com/images/image-portfolio/1557036591_propbridge-thamb.jpg' />
//                                     </div>
//                                 </a>
//                             <a href="/" className='portfolio_name'>
//                                 <span>Rise International</span>
//                                     <div className='portfolio_img parallax-content' style={{ transform: `translate(-${position.x / 10}px, -${position.y / 10}px)`,}}>
//                                         <img src='https://www.indiainternets.com/images/image-portfolio/1584416769_riseinfrainternational-thamb.jpg' />
//                                     </div>
//                                 </a>
//                             <a href="/" className='portfolio_name'>
//                                 <span>NPI Group</span>
//                                     <div className='portfolio_img parallax-content' style={{ transform: `translate(-${position.x / 10}px, -${position.y / 10}px)`,}}>
//                                         <img src='https://www.indiainternets.com/images/image-portfolio/494227768_npigroupindia-thamb.jpg' />
//                                     </div>
//                                 </a>
//                             <a href="/" className='portfolio_name'>
//                                 <span>Riglam School</span>
//                                     <div className='portfolio_img parallax-content' style={{ transform: `translate(-${position.x / 10}px, -${position.y / 10}px)`,}}>
//                                         <img src='https://www.indiainternets.com/images/image-portfolio/504428561_riglamschool-thamb.jpg' />
//                                     </div>
//                                 </a>
//                             <a href="/" className='portfolio_name'>
//                                 <span>Dreamscape</span>
//                                     <div className='portfolio_img parallax-content' style={{ transform: `translate(-${position.x / 10}px, -${position.y / 10}px)`,}}>
//                                         <img src='https://www.indiainternets.com/images/image-portfolio/680403573_dreamscape-thamb.jpg' />
//                                     </div>
//                                 </a>
//                         </div>
//                     </div>
//                     {/* <div className='col-md-9'>
//                         <div className='portfolioslider'>
//                             <Slider />
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//         </section>
//     </>
//     );
// };


// export default Portfolio;

