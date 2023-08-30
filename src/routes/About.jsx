import react from 'react';
import aboutimg from "../images/971.jpg";


const About = () => {
    return (
        <section>
            <div className='container'>
                <div className='about_img'>
                    <img src={aboutimg} alt=""  className='scroll_img'/>
                </div>
                <h1 className='about_text'>I'm a UI/UX designer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.</h1>
            </div>
        </section>
    );
};


export default About;

