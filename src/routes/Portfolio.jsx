import react from 'react';
import Slider from './Slider';



const Portfolio = () => {
    return (
    <>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h2 className='heading'>My Work</h2>
                    </div>
                    <div className='col-md-9'>
                        <div className='portfolioslider'>
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};


export default Portfolio;

