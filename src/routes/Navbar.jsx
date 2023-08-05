import react from 'react'

const Navbar = () => {
    return (
        <>
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <a className="navbar-brand" href="/">RS Studio</a>
                            <div className='side_menu'>
                                <button className='w-6 h-6 flex items-center justify-center '>
                                    <div className='relative flex-none w-full flex items-center justify-center'></div>
                                </button>
                            </div>
                            {/* <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="/service">Service</a></li>
                            </ul> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;
