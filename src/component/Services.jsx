import React from 'react'
import { FaBookmark, FaDesktop, FaHistory, FaLayerGroup, FaAnchor, FaRocket, FaChartBar, FaTelegramPlane, FaObjectUngroup, FaDiscord, FaShoppingBag, FaShoppingBasket, FaSuitcase, FaUser, FaUserAlt, FaUserAltSlash, FaUserAstronaut, FaUserCheck, FaUserGraduate, FaUserMd, FaUserSecret, FaUserTie, FaHospital, FaImage, FaRegImages, FaAndroid } from 'react-icons/fa';
import '../index.css'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <>
            {/* <!-- home Start --> */}
            <section className="page-title-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">Services</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to={'/'} >Home</Link></li>
                                            <li className="breadcrumb-item"><Link to={'/service'} >Services</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact us</li>
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

            {/* <!-- SHAPE START --> */}
            <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="#FFFFFF" fill-opacity="1"
                            d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
            {/* <!-- SHAPE END --> */}

            {/* <!-- SERVICES START--> */}
            <section className="section mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h3 className="title mb-3">Providing our trusted <span className="text-warning">Services</span></h3>
                                <p className="text-muted">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaObjectUngroup style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="mt-4">
                                        <h5>Manage Job Ads</h5>
                                        <p className="text-muted">We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds.</p>
                                    </div>
                                    <div className="learn-more">
                                        <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaTelegramPlane style={{ fontSize: '24px' }} />

                                    </div>
                                    <div className="mt-4">
                                        <h5>Temp Search</h5>
                                        <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today.</p>
                                        <div className="learn-more">
                                            <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaDesktop style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="mt-4">
                                        <h5>Display Jobs</h5>
                                        <p className="text-muted">Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.</p>
                                        <div className="learn-more">
                                            <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaRocket style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="mt-4">
                                        <h5>For Agencies</h5>
                                        <p className="text-muted">At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                        <div className="learn-more">
                                            <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaHistory style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="mt-4">
                                        <h5>Quick Support</h5>
                                        <p className="text-muted">Designers have a lot of tools to make a story more intersting. You can align your image to the leftcenter with a caption.</p>
                                        <div className="learn-more">
                                            <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaBookmark style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="mt-4">
                                        <h5>Bookmark Jobs</h5>
                                        <p className="text-muted">Becomes an interactive story that can engage users. Designers have a lot of tools to make a story more intersting.</p>
                                        <div className="learn-more">
                                            <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaLayerGroup style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="mt-4">
                                        <h5>Creative Design</h5>
                                        <p className="text-muted">A business consulting agency is involved in the planning, implementation, and education of businesses. We work directly.</p>
                                        <div className="learn-more">
                                            <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaAnchor style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="mt-4">
                                        <h5>Stratagy & Research</h5>
                                        <p className="text-muted">The most important aspect of beauty was, therefore, an inherent part of an object, rather than something.</p>
                                        <div className="learn-more">
                                            <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="card service-box mt-4">
                                <div className="card-body p-4">
                                    <div className="service-icon icons-md text-TGreen">
                                        <FaChartBar style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="mt-4">
                                        <h5>Real-time Analytics</h5>
                                        <p className="text-muted">This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism.</p>
                                        <div className="learn-more">
                                            <a href="javascript:void(0)" className="form-text text-TGreen">Learn More <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end service--> */}
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- SERVICESName END--> */}
        </>
    )
}

export default Services
