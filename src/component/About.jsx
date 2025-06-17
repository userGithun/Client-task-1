import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function About() {
    return (
        <>
            {/* <!-- Start home --> */}
            <section className="page-title-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">About Us</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li className="breadcrumb-item"><Link href="javascript:void(0)">About Us</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- end home --> */}

            {/* <!-- START SHAPE --> */}
            <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="#FFFFFF" fill-opacity="1"
                            d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
            {/* <!-- END SHAPE --> */}


            {/* <!-- START ABOUT --> */}
            <section className="section overflow-hidden">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-6">
                            <div className="section-title me-lg-5">
                                <h6 className="sub-title">About Us</h6>
                                <h2 className="title mb-4">Why <span className="text-warning fw-bold">35,000+</span> People Trust On <br /> SR Web Services?</h2>

                                <p className="text-muted">Start building your digital presence with SR Consultancy Web Services – your partner for impactful strategies, web development, and seamless digital growth. We create innovative experiences that help businesses stand out and thrive in a competitive online space with custom-built solutions for every need.</p>

                                <div className="row mt-4 pt-2">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                                            <li> Digital Marketing Solutions</li>
                                            <li> Our Talented & Experienced Marketing Agency</li>
                                            <li> Creative Design</li>
                                            <li> New jobs Innovation</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled about-list text-muted">
                                            <li> Create Resume</li>
                                            <li> and more...</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <Link className="btn text-white TGreen btn-hover">Learn More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-6">
                            <div className="about-img mt-4 mt-lg-0">
                                <img src="/src/assets/images/about/about.jpg" alt="" className="w-75 text-center rounded"/>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- END ABOUT --> */}
        </>
    )
}

export default About
