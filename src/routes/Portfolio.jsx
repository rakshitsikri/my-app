import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Box({ index }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    gsap.set(box, {
      left: '50%',
      top: '50%',
      width: '100%',
      height: 300,
      borderRadius: '20%',
      backgroundColor: '#e0e0e0',
      textAlign: 'center',
      lineHeight: '300px',
      fontSize: '12rem'
    });

    box.textContent = [`Box ${index + 1}`];

    box.tl = gsap.timeline({  defaults: { immediateRender: true } })
      .fromTo(box, {
        scale: 0.3,
        rotationX: (index / 30) * 360,
        transformOrigin: '50% 50% -500%'
      }, {
        rotationX: '+=360',
        ease: 'none'
      })
      .timeScale(0.05);

    box.addEventListener('mouseover', () => { gsap.to(box, { opacity: 0.5, scale: 0.36, duration: 0.4, ease: 'expo' }); });
    box.addEventListener('mouseout', () => { gsap.to(box, { opacity: 1, scale: 0.3, duration: 0.2, ease: 'back.out(3)', overwrite: 'auto' }); });
    box.addEventListener('click', () => { alert(`Clicked on Box ${index + 1}`); });

    return () => {
      box.removeEventListener('mouseover', () => { gsap.to(box, { opacity: 0.5, scale: 0.36, duration: 0.4, ease: 'expo' }); });
      box.removeEventListener('mouseout', () => { gsap.to(box, { opacity: 1, scale: 0.3, duration: 0.2, ease: 'back.out(3)', overwrite: 'auto' }); });
      box.removeEventListener('click', () => { alert(`Clicked on Box ${index + 1}`); });
    };
  }, [index]);

  return <div ref={boxRef}></div>;
}

function BoxesContainer() {
  useEffect(() => {
    const c = document.getElementById('container');

    gsap.to(c, 0.4, { perspective: 200, backgroundColor: '#fff' });

    ScrollTrigger.create({
      trigger: '#scrollDist',
      start: 'top top',
      end: 'bottom bottom',
      onRefresh: self => {
        boxes.forEach((b, i) => { gsap.set(b.tl, { progress: self.progress }); });
      },
      onUpdate: self => {
        boxes.forEach((b, i) => { gsap.to(b.tl, { progress: self.progress }); });
      }
    });
  }, []);

  const boxes = Array.from({ length: 30 }, (_, i) => <Box key={i} index={i} />);

  return <div id="container">{boxes}</div>;
}

export default BoxesContainer;







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

