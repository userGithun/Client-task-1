import React from 'react'
import { FaBookmark, FaDesktop, FaHistory, FaLayerGroup, FaAnchor, FaRocket, FaChartBar, FaTelegramPlane, FaObjectUngroup, FaDiscord, FaShoppingBag, FaShoppingBasket, FaSuitcase, FaUser, FaUserAlt, FaUserAltSlash, FaUserAstronaut, FaUserCheck, FaUserGraduate, FaUserMd, FaUserSecret, FaUserTie, FaHospital, FaImage, FaRegImages, FaAndroid } from 'react-icons/fa';
import '../index.css'
import { Link } from 'react-router-dom'
import { FaBagShopping, FaDisplay, FaImagePortrait, FaUserGear, FaUserPen } from 'react-icons/fa6';


function Home() {
    return (
        <>

            {/* Banner start */}
            <div className="main-content">
                <div className="page-content">
                    {/* <!-- START HOME --> */}
                    <section className="bg-home2" id="home">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="mb-4 pb-3 me-lg-5">
                                        <h6 className="sub-title">We have 150,000+ live jobs</h6>
                                        <h1 className="display-5 fw-semibold mb-3">Find your dream jobs with <span className="text-TGreen fw-bold">SR Web Services</span></h1>
                                        <p className="lead text-muted mb-0">Find jobs, create trackable resumes and enrich your applications.Carefully crafted after analyzing the needs of different industries.</p>
                                    </div>

                                </div>
                                {/* <!--end col--> */}
                                <div className="col-lg-5">
                                    <div className="mt-5 mt-md-0">
                                        <img src="/src/assets/images/process-02.png" alt="" className="home-img" />
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end container--> */}
                    </section>
                    {/* <!-- End Home --> */}

                    {/* <!-- START SHAPE --> */}
                    <div className="position-relative">
                        <div className="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="1440" height="150" preserveAspectRatio="none" viewBox="0 0 1440 220">
                                <g mask="url(&quot;#SvgjsMask1004&quot;)" fill="none">
                                    <path d="M 0,213 C 288,186.4 1152,106.6 1440,80L1440 250L0 250z" fill="rgba(255, 255, 255, 1)"></path>
                                </g>
                                <defs>
                                    <mask id="SvgjsMask1004">
                                        <rect width="1440" height="250" fill="#ffffff"></rect>
                                    </mask>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    {/* <!-- END SHAPE --> */}
                </div>
            </div>
            {/* Banner End */}

            {/* <!-- START CATEGORY --> */}
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h3 className="title">Browser Jobs Categories </h3>
                                <p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the
                                    right freelancers.</p>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="popu-category-box rounded text-center">
                                <div className="popu-category-icon icons-md">
                                    <FaLayerGroup className='text-TGreen' />
                                </div>
                                <div className="popu-category-content mt-4">
                                    <a href="job-categories.html" className="text-dark stretched-link">
                                        <h5 className="fs-18">IT & Software</h5>
                                    </a>
                                    <p className="text-muted mb-0">2024 Jobs</p>
                                </div>
                            </div>
                            {/* <!--end popu-category-box--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="popu-category-box rounded text-center">
                                <div className="popu-category-icon icons-md">
                                    <FaDisplay className='text-TGreen' />
                                </div>
                                <div className="popu-category-content mt-4">
                                    <a href="job-categories.html" className="text-dark stretched-link">
                                        <h5 className="fs-18">Technology</h5>
                                    </a>
                                    <p className="text-muted mb-0">1250 Jobs</p>
                                </div>
                            </div>
                            {/* <!--end popu-category-box--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="popu-category-box rounded text-center">
                                <div className="popu-category-icon icons-md">
                                    <FaSuitcase className='text-TGreen' />
                                </div>
                                <div className="popu-category-content mt-4">
                                    <a href="job-categories.html" className="text-dark stretched-link">
                                        <h5 className="fs-18">Government</h5>
                                    </a>
                                    <p className="text-muted mb-0">802 Jobs</p>
                                </div>
                            </div>
                            {/* <!--end popu-category-box--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="popu-category-box rounded text-center">
                                <div className="popu-category-icon icons-md">
                                    <FaUserTie className='text-TGreen' />
                                </div>
                                <div className="popu-category-content mt-4">
                                    <a href="job-categories.html" className="text-dark stretched-link">
                                        <h5 className="fs-18">Accounting / Finance</h5>
                                    </a>
                                    <p className="text-muted mb-0">577 Jobs</p>
                                </div>
                            </div>
                            {/* <!--end popu-category-box--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="popu-category-box rounded text-center">
                                <div className="popu-category-icon icons-md">
                                    <FaHospital className='text-TGreen' />
                                </div>
                                <div className="popu-category-content mt-4">
                                    <a href="job-categories.html" className="text-dark stretched-link">
                                        <h5 className="fs-18">Construction / Facilities</h5>
                                    </a>
                                    <p className="text-muted mb-0">285 Jobs</p>
                                </div>
                            </div>
                            {/* <!--end popu-category-box--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="popu-category-box rounded text-center">
                                <div className="popu-category-icon icons-md">
                                   
                                    <FaTelegramPlane className='text-TGreen' />
                                </div>
                                <div className="popu-category-content mt-4">
                                    <a href="job-categories.html" className="text-dark stretched-link">
                                        <h5 className="fs-18">Tele-communications</h5>
                                    </a>
                                    <p className="text-muted mb-0">495 Jobs</p>
                                </div>
                            </div>
                            {/* <!--end popu-category-box--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="popu-category-box rounded text-center">
                                <div className="popu-category-icon icons-md">
                                    <FaRegImages className='text-TGreen' />
                                </div>
                                <div className="popu-category-content mt-4">
                                    <a href="job-categories.html" className="text-dark stretched-link">
                                        <h5 className="fs-18">Design & Multimedia</h5>
                                    </a>
                                    <p className="text-muted mb-0">1045 Jobs</p>
                                </div>
                            </div>
                            {/* <!--end popu-category-box--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="popu-category-box rounded text-center">
                                <div className="popu-category-icon icons-md">
                                    
                                    <FaAndroid className='text-TGreen' />
                                </div>
                                <div className="popu-category-content mt-4">
                                    <a href="job-categories.html" className="text-dark stretched-link">
                                        <h5 className="fs-18">Human Resource</h5>
                                    </a>
                                    <p className="text-muted mb-0">1516 Jobs</p>
                                </div>
                            </div>
                            {/* <!--end popu-category-box--> */}
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-5 text-center">
                                <Link to={'#'} className="btn TGreen text-white btn-hover">Browse All Categories <i className="uil uil-arrow-right ms-1"></i></Link>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- END CATEGORY --> */}

            {/* <!-- JOB-LIST START --> */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title">New & Random Jobs</h4>
                                <p className="text-muted mb-1">Post a job to tell us about your project. We'll quickly match you
                                    with the right freelancers.</p>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>

                    <div className="container ">
                        <div className="row g-4">

                            {/* Post Your Requirement */}
                            <div className="col-md-4">
                                <div className="p-4 border rounded">
                                    <h5 className="TGreen text-white text-center py-2">Post Your Requirement</h5>
                                    <form>
                                        <input type="text" placeholder="Enter Your Name" className="form-control my-2" />
                                        <input type="email" placeholder="Enter Your Email Address" className="form-control my-2" />
                                        <input type="text" placeholder="+91 0000000000" className="form-control my-2" />
                                        <textarea placeholder="Comment" className="form-control my-2" rows="2"></textarea>

                                        <div className="d-flex justify-content-between mt-3">
                                            <button className="btn btn-success">Submit</button>
                                            <button type="reset" className="btn btn-outline-success">Reset</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Current Opening */}
                            <div className="col-md-4">
                                <div className="p-4 border rounded">
                                    <h5 className="TGreen text-white text-center py-2">Current Opening</h5>

                                    <div className="my-3">
                                        <p><strong>Experience:</strong> 2-4 Years</p>
                                        <p><strong>Location:</strong> Location - Noida</p>
                                        <hr />
                                    </div>

                                    <div className="my-3">
                                        <p><strong>Designation:</strong> SEO Executive</p>
                                        <p><strong>Experience:</strong> 1-2 Years</p>
                                        <p><strong>Location:</strong> Location - Noida</p>
                                        <hr />
                                    </div>

                                    <div className="my-3">
                                        <p><strong>Designation:</strong> Dot Net Developer</p>
                                        <p><strong>Experience:</strong> 2-4 Years</p>
                                        <p><strong>Location:</strong> Location - Noida</p>
                                    </div>
                                </div>
                            </div>

                            {/* Post Your Resume */}
                            <div className="col-md-4">
                                <div className="p-4 border rounded">
                                    <h5 className="TGreen text-white text-center py-2">Post Your Resume</h5>
                                    <form>
                                        <input type="text" placeholder="Enter Your Name" className="form-control my-2" />
                                        <input type="email" placeholder="Enter Your Email Address" className="form-control my-2" />
                                        <input type="text" placeholder="+91 0000000000" className="form-control my-2" />
                                        <textarea placeholder="Designation" className="form-control my-2" rows="2"></textarea>
                                        <input type="file" className="form-control my-2" />

                                        <div className="d-flex justify-content-between mt-3">
                                            <button className="btn btn-success">Submit</button>
                                            <button type="reset" className="btn btn-outline-success">Reset</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>
            {/* <!-- JOB-LIST End --> */}


            {/* <!-- PROCESS START  --> */}
            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title me-5">
                                <h3 className="title">How It Work</h3>
                                <p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the
                                    right freelancers.</p>
                                <div className="process-menu nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <div className="d-flex">
                                            <div className="number flex-shrink-0">
                                                1
                                            </div>
                                            <div className="flex-grow-1 text-start ms-3">
                                                <h5 className="fs-18">Post Your Requirement</h5>
                                                <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability
                                                    is of great importance.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                        <div className="d-flex">
                                            <div className="number flex-shrink-0">
                                                2
                                            </div>
                                            <div className="flex-grow-1 text-start ms-3">
                                                <h5 className="fs-18">Check Current Opening</h5>
                                                <p className="text-muted mb-0">There are many variations of passages of avaibookmark-label, but the majority
                                                    alteration in some form.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                        <div className=" d-flex">
                                            <div className="number flex-shrink-0">
                                                3
                                            </div>
                                            <div className="flex-grow-1 text-start ms-3">
                                                <h5 className="fs-18">Post Your Details</h5>
                                                <p className="text-muted mb-0">It is a long established fact that a reader will be distracted by the
                                                    readable content of a page.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-6">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <img src="/src/assets/images/process-01.png" alt="" className="img-fluid" />
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <img src="/src/assets/images/process-02.png" alt="" className="img-fluid" />
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <img src="/src/assets/images/process-03.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- PROCESS END --> */}

            {/* <!-- SERVICES START--> */}
            <section className="section bg-light">
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
                                    <div className="service-icon icons-md">
                                        <FaObjectUngroup style={{ color: '#00b074', fontSize: '24px' }} />
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
                                    <div className="service-icon icons-md">
                                        <FaTelegramPlane style={{ color: '#00b074', fontSize: '24px' }} />

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
                                    <div className="service-icon icons-md">
                                        <FaDesktop style={{ color: '#00b074', fontSize: '24px' }} />
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
                                    <div className="service-icon icons-md">
                                        <FaRocket style={{ color: '#00b074', fontSize: '24px' }} />
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
                                    <div className="service-icon icons-md">
                                        <FaHistory style={{ color: '#00b074', fontSize: '24px' }} />
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
                                    <div className="service-icon icons-md">
                                        <FaBookmark style={{ color: '#00b074', fontSize: '24px' }} />
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
                                    <div className="service-icon icons-md">
                                        <FaLayerGroup style={{ color: '#00b074', fontSize: '24px' }} />
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
                                    <div className="service-icon icons-md">
                                        <FaAnchor style={{ color: '#00b074', fontSize: '24px' }} />
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
                                    <div className="service-icon icons-md">
                                        <FaChartBar style={{ color: '#00b074', fontSize: '24px' }} />
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


export default Home
