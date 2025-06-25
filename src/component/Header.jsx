import React from 'react'
import { Link } from 'react-router-dom'
import clientLogo from '/src/assets/images/client-logo.png';
import '../index.css'

function Header() {
    return (
        <>
            {/* <!--start page Loader --> */}
            {/* <div id="preloader">
                <div id="status">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div> */}
            {/* <!--end page Loader --> */}


            {/* <!--Navbar Start--> */}
            <nav className="navbar mt-0 navbar-expand-lg fixed-top sticky " id="navbar">
                <div className="container-fluid custom-container">
                    <Link className="navbar-brand text-dark fw-bold me-auto" to={'/'}>
                        <img src={clientLogo} height="80" alt="" className="custom-shadow" />
                    </Link>
                    <div>
                        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse TGreen" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto navbar-center text-center">
                            <li className="nav-item custom-pl-lg">
                                <Link to={'/'} className="nav-link" id="homedrop" role="button">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={'/about'} className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={'/client'} className="nav-link">
                                    Clients
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={'/candidate'} className="nav-link">
                                    Candidates
                                </Link>
                            </li>

                            <li className="nav-item ">
                                <Link to={'/service'} className="nav-link">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        {/* <!--end navbar-nav--> */}
                    </div>
                </div>
                {/* <!--end container--> */}
            </nav>
            {/* <!-- Navbar End --> */}


            {/* <!-- START SIGN-UP MODAL --> */}
            <div className="modal fade" id="signupModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-5">
                            <div className="position-absolute end-0 top-0 p-3">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="auth-content">
                                <div className="w-100">
                                    <div className="text-center mb-4">
                                        <h5>Sign Up</h5>
                                        <p className="text-muted">Sign Up and get access to all the features of Jobcy</p>
                                    </div>
                                    <form action="#" className="auth-form">
                                        <div className="mb-3">
                                            <label for="usernameInput" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="usernameInput" placeholder="Enter your username" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="passwordInput" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="emailInput" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                                        </div>
                                        <div className="mb-4">
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">I agree to the <a href="javascript:void(0)" className="text-primary form-text text-decoration-underline">Terms and conditions</a></label>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                                        </div>
                                    </form>
                                    <div className="mt-3 text-center">
                                        <p className="mb-0">Already a member ? <a href="sign-in.html" className="form-text text-primary text-decoration-underline"> Sign-in </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end modal-body--> */}
                    </div>
                    {/* <!--end modal-content--> */}
                </div>
                {/* <!--end modal-dialog--> */}
            </div>
            {/* <!-- END SIGN-UP MODAL --> */}

        </>
    )
}

export default Header
