import react from "react";
import web from "../images/webdesign.gif";

const Home = () => {
    return (
        <section id="header" className="nav_bg">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className="banner_img">
                            <img src={web} className="img-fluid animated" />
                        </div>
                    </div>
                    <div className='col-md-6' >
                        <div className="banner_text">
                            {/* <h4 className="round">Hello, There</h4> */}
                            <h1 className="fn60">Say Hi, ✌️<br></br><span> from Rakshit</span>,<br></br> UI / UX Designer.</h1>
                            <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                            <div className="cvbtn">
                                <a href="/" className="Button_primary mr-3">Download CV</a>
                                <a href="#" className="btn_contact">Let's Talk</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;


