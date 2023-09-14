import react from 'react';
import Slider from './Slider';



const Portfolio = () => {
    return (
    <>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4 className='text-center mb-3 clr_white'>[My Work]</h4>
                        <div className='project_name text-center'>
                            <a href="/" className='portfolio_name'>
                                <span>Museo Camera</span>
                                    <div className='portfolio_img'>
                                        <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
                                    </div>
                                </a>
                            <a href="/" className='portfolio_name'>
                                <span>Forms Design Studio</span>
                                    <div className='portfolio_img'>
                                        <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
                                    </div>
                                </a>
                            <a href="/" className='portfolio_name'>
                                <span>IOC Phinergy</span>
                                    <div className='portfolio_img'>
                                        <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
                                    </div>
                                </a>
                            <a href="/" className='portfolio_name'>
                                <span>Prop Bridge</span>
                                    <div className='portfolio_img'>
                                        <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
                                    </div>
                                </a>
                            <a href="/" className='portfolio_name'>
                                <span>Rise International</span>
                                    <div className='portfolio_img'>
                                        <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
                                    </div>
                                </a>
                            <a href="/" className='portfolio_name'>
                                <span>NPI Group</span>
                                    <div className='portfolio_img'>
                                        <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
                                    </div>
                                </a>
                            <a href="/" className='portfolio_name'>
                                <span>Riglam School</span>
                                    <div className='portfolio_img'>
                                        <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
                                    </div>
                                </a>
                            <a href="/" className='portfolio_name'>
                                <span>Dreamscape</span>
                                    <div className='portfolio_img'>
                                        <img src='https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg' />
                                    </div>
                                </a>
                        </div>
                    </div>
                    {/* <div className='col-md-9'>
                        <div className='portfolioslider'>
                            <Slider />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </>
    );
};


export default Portfolio;

