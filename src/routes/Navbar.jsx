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
                                        <span class="rolling-text">
                                            <span class="block"><span class="letter">H</span><span class="letter">O</span><span class="letter">M</span><span class="letter">E</span></span>
                                            <span class="block"><span class="letter">H</span><span class="letter">O</span><span class="letter">M</span><span class="letter">E</span></span>
                                        </span>    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        <span class="rolling-text">
                                            <span class="block"><span class="letter">A</span><span class="letter">B</span><span class="letter">O</span><span class="letter">U</span><span class="letter">T</span></span>
                                            <span class="block"><span class="letter">A</span><span class="letter">B</span><span class="letter">O</span><span class="letter">U</span><span class="letter">T</span></span>
                                        </span>    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/service">
                                        <span class="rolling-text">
                                            <span class="block"><span class="letter">S</span><span class="letter">E</span><span class="letter">R</span><span class="letter">V</span><span class="letter">I</span><span class="letter">C</span><span class="letter">E</span></span>
                                            <span class="block"><span class="letter">S</span><span class="letter">E</span><span class="letter">R</span><span class="letter">V</span><span class="letter">I</span><span class="letter">C</span><span class="letter">E</span></span>
                                        </span>   
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        <span class="rolling-text">
                                            <span class="block"><span class="letter">R</span><span class="letter">E</span><span class="letter">S</span><span class="letter">U</span><span class="letter">M</span><span class="letter">E</span></span>
                                            <span class="block"><span class="letter">R</span><span class="letter">E</span><span class="letter">S</span><span class="letter">U</span><span class="letter">M</span><span class="letter">E</span></span>
                                        </span>   
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        <span class="rolling-text">
                                            <span class="block"><span class="letter">C</span><span class="letter">O</span><span class="letter">N</span><span class="letter">T</span><span class="letter">A</span><span class="letter">C</span><span class="letter">T</span></span>
                                            <span class="block"><span class="letter">C</span><span class="letter">O</span><span class="letter">N</span><span class="letter">T</span><span class="letter">A</span><span class="letter">C</span><span class="letter">T</span></span>
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
