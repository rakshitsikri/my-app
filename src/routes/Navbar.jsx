import react from 'react'

const Navbar = () => {
    return (
        <>
        <div className='container main_menu'>
            <div className='row'>
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                            <a className="navbar-brand" href="/">RS Studio</a>
                            {/* <div className='side_menu'>
                                <button className='w-6 h-6 flex items-center justify-center '>
                                    <div className='relative flex-none w-full flex items-center justify-center'></div>
                                </button>
                            </div> */}
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        <span className="rolling-text">
                                            <span className="block"><span className="letter">H</span><span className="letter">O</span><span className="letter">M</span><span className="letter">E</span></span>
                                            <span className="block"><span className="letter">H</span><span className="letter">O</span><span className="letter">M</span><span className="letter">E</span></span>
                                        </span>    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        <span className="rolling-text">
                                            <span className="block"><span className="letter">A</span><span className="letter">B</span><span className="letter">O</span><span className="letter">U</span><span className="letter">T</span></span>
                                            <span className="block"><span className="letter">A</span><span className="letter">B</span><span className="letter">O</span><span className="letter">U</span><span className="letter">T</span></span>
                                        </span>    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/service">
                                        <span className="rolling-text">
                                            <span className="block"><span className="letter">S</span><span className="letter">E</span><span className="letter">R</span><span className="letter">V</span><span className="letter">I</span><span className="letter">C</span><span className="letter">E</span></span>
                                            <span className="block"><span className="letter">S</span><span className="letter">E</span><span className="letter">R</span><span className="letter">V</span><span className="letter">I</span><span className="letter">C</span><span className="letter">E</span></span>
                                        </span>   
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        <span className="rolling-text">
                                            <span className="block"><span className="letter">R</span><span className="letter">E</span><span className="letter">S</span><span className="letter">U</span><span className="letter">M</span><span className="letter">E</span></span>
                                            <span className="block"><span className="letter">R</span><span className="letter">E</span><span className="letter">S</span><span className="letter">U</span><span className="letter">M</span><span className="letter">E</span></span>
                                        </span>   
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        <span className="rolling-text">
                                            <span className="block"><span className="letter">C</span><span className="letter">O</span><span className="letter">N</span><span className="letter">T</span><span className="letter">A</span><span className="letter">C</span><span className="letter">T</span></span>
                                            <span className="block"><span className="letter">C</span><span className="letter">O</span><span className="letter">N</span><span className="letter">T</span><span className="letter">A</span><span className="letter">C</span><span className="letter">T</span></span>
                                        </span>   
                                    </a>
                                </li>
                            </ul>
                            <a href="tel:8950781500" className='contactno'>+91 895-078-1500</a>
                            </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;
