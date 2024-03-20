import react from "react";
import web from "../images/webdesign.gif";
import resume from "../images/resume.pdf";

function getMousePositionRelativeToElement(event, elementClassName) {
    var mouseX, mouseY;
    if (event.pageX || event.pageY) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    } else {
        mouseX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        mouseY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    var targetElement = document.querySelector("." + elementClassName);
    var rect = targetElement.getBoundingClientRect();
    var relativeX = mouseX - rect.left;
    var relativeY = mouseY - rect.top;
    return { x: relativeX, y: relativeY };
}

document.addEventListener("mousemove", function(event) {
    var mousePos = getMousePositionRelativeToElement(event, "Button_primary");
    
    // Set the mousePos.x and mousePos.y as CSS variables on the body element
    document.body.style.setProperty('--mouse-pos-x', mousePos.x + 'px');
    document.body.style.setProperty('--mouse-pos-y', mousePos.y + 'px');
});

const Home = () => {
    return (
        <section className="baner_sec">
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
                            <h1 className="fn40">Say Hi, ✌️<br></br><span> from Rakshit</span>,<br></br> Frontend Developer.</h1>
                            <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                            <div className="cvbtn">
                                <a href="./resume.pdf" target="_blank" className="Button_primary mr-3">
                                    <span class="button__flair"></span>
                                    <span class="button__label">Download CV</span>
                                </a>
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


