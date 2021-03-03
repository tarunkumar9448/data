import React, { Component } from 'react';
import PlayIcon from '../assets/img/home/play.png';
import HeaderImg from '../assets/img/pricing/banner.png';
import LeftImg from '../assets/img/home/left-bg.png';
import Img1 from '../assets/img/home/1.png';
import Img2 from '../assets/img/home/2.png';
import Img3 from '../assets/img/home/3.png';
import Img4 from '../assets/img/home/4.png';
import Img5 from '../assets/img/home/5.png';
import ImgSecurity from '../assets/img/home/image_2.png';
import ImgCustomer from '../assets/img/home/image_3.png';
import ImgLeafe from '../assets/img/home/image_4.png';
import Imgright from '../assets/img/home/right-img.png';
import ImgTeam  from '../assets/img/home/image_5.png';
import ImgCompany  from '../assets/img/home/company.png';
import ImgExecutive  from '../assets/img/home/executive.png';
import ImgData  from '../assets/img/home/data.png';
import ImgUser  from '../assets/img/home/user_photo.png';
import './Price.css';

class Blog extends Component {

    render() {
        return (
            <section>
            
                <section className="home-banner price-bg mb-4 mb-lg-n4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-5">
                                <h1 className="banner-heading">
                                    Our Pricing
                                </h1>
                                <p className="banner-text mb-5">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="left-header-img">
                        <img src={HeaderImg} alt="datashark" className="d-none d-md-block" />
                    </div>
                </section>
            
            <img src={LeftImg} className="left-bg" />
            <section className="client py-5 wow animate__animated animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0s">
            <div className="container">
                <p className="text-center h6 text-primary my-0">Happy Clients</p>
                <h2 className="text-center section-heading mt-2 mb-4">Same of our setisfied customers</h2>
                <div className="owl-carousel mt-5" id="clientcarousel">
                    <div className="item">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="item">
                        <img src={Img2} alt="" />
                    </div>
                    <div className="item">
                        <img src={Img3} alt="" />
                    </div>
                    <div className="item">
                        <img src={Img4} alt="" />
                    </div>
                    <div className="item">
                        <img src={Img5} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <div className="py-xl-4"></div>
        <section className="database py-5 mt-lg-4 wow animate__animated animate__fadeIn" data-wow-duration="2s" data-wow-delay=".5s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <p className="h6 text-primary my-0">Data Security</p>
                        <h2 className="section-heading mt-2 mb-4">Top-rated B2B Database with 100% Data Security </h2>
                        <p>Accelerate Your Sales & Marketing with:</p>
                        <ul className="list-style mb-3">
                            <li className="wow animate__animated animate__fadeInLeft" data-wow-duration="2s" data-wow-delay=".5s">Targeted email marketing campaigns</li>
                            <li className="wow animate__animated animate__fadeInLeft" data-wow-duration="2s" data-wow-delay=".7s">Upselling & cross-selling effectively</li>
                            <li className="wow animate__animated animate__fadeInLeft" data-wow-duration="2s" data-wow-delay=".9s">Predicting buyer intent</li>
                        </ul>
                <a href="#" className="text-success link-arrow">Activate Lines</a>
                    </div>
                    <div className="col-md-6">
                        <figure className="m-0 wow animate__animated animate__fadeInRight" data-wow-duration="3s" data-wow-delay="1.5s">
                        <img src={ImgSecurity} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <div className="py-xl-4"></div>

        <section className="industry py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 d-none d-md-block">
                        <figure className="m-0 wow animate__animated animate__fadeInLeft" data-wow-duration="3s" data-wow-delay="1s">
                        <img src={ImgCustomer} alt="" />
                               </figure>
                    </div>
                    <div className="col-md-6">
                         <p className="h6 text-primary my-0"></p>
                        <h2 className="section-heading mt-2 mb-4">Widen Your Business Network & Customer Base</h2>
                        <p>Get access to a massive database comprising of relevant, reachable, and useful contact details and:</p>
                        <ul className="list-style mb-4">
                            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">Establish longstanding relationships with your potential customers</li>
                            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="2s" data-wow-delay="1s">Explore newer marketplaces to grab new opportunities of success</li>
                        </ul>
                        <a href="#" className="text-success link-arrow">Get Started</a>
                    </div>
                </div>
            </div>

            <img src={ImgLeafe} alt="" className="leaf d-none d-xl-block wow animate__animated animate__fadeIn" data-wow-duration="4s" />

        </section>
        <div className="py-xl-4"></div>
        <img src={Imgright} className="right-bg" />
            <section className="manage py-5">
        <div className="container">
            <p className="text-center h6 text-primary my-0">Lorem Ipsem</p>
            <h2 className="text-center section-heading mt-2 mb-4">Manage your team better</h2>
            <div className="row align-items-center">
                <div className="col-md-12">
                    <img src={ImgTeam} alt=""  className="wow animate__animated animate__zoomIn" data-wow-duration="4s" data-wow-delay="0s" />
                </div>
            </div>
        </div>
    </section>
    <div className="py-xl-4"></div>
    <section className="why-us py-5 wow animate__animated animate__flipInX" data-wow-duration="3s" data-wow-delay=".1s">
        <div className="container">
             <p className="text-center h6 text-primary my-0">Why DataSharkPro?</p>
            <h2 className="text-center section-heading mt-2 mb-4">Get Datashark and you will become</h2>
            <div className="owl-carousel" id="whyUsCarousel">
                <div className="get-box py-4 px-3">
                    <a href="#" className="d-block why-us-link text-center slow-2x bg-white">
                        <img src={ImgCompany} alt="" />
                        <h3 className="section-heading">Company Search</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit ducimus qui blanditiis too its see voluptatem accusantium sires.</p>
                        <span className="text-center text-success">Start Search</span>
                    </a>
                </div>
                <div className="get-box py-4 px-3">
                    <a href="#" className="d-block why-us-link text-center slow-2x bg-white">
                        <img src={ImgExecutive} alt="" />
                        <h3 className="section-heading">Company Search</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit ducimus qui blanditiis too its see voluptatem accusantium sires.</p>
                        <span className="text-center text-success">Start Search</span>
                    </a>
                </div>
                <div className="get-box py-4 px-3">
                    <a href="#" className="d-block why-us-link text-center slow-2x bg-white">
                        <img src={ImgData} alt="" />
                        <h3 className="section-heading">Data as a Service</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit ducimus qui blanditiis too its see voluptatem accusantium sires.</p>
                       <span className="text-center text-success">Request a demo</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <div className="py-xl-4"></div>
    <section className="started py-5">
        <div className="container py-lg-4">
            <div className="row align-items-center my-3">
                <div className="col-md-8 col-lg-7 mr-auto mb-4 mb-md-0">
                    <h2 className="section-heading mt-2 mb-4 text-white">Get started with DataShark</h2>
                    <p className="text-white">Do have any query? Call us to our Toll free no: +91-000-000-000
                        or Contact us at sales@datashark.com</p>
                </div>
                <div className="col-md-4 text-center">
                    <a href="#" className="btn btn-success mx-auto py-3">Start your trail free now </a>
                    <p className="text-white">Already have an account? <a href="#" className="text-success">Login</a></p>
                </div>
            </div>
        </div>
    </section>
    <div className="py-xl-4"></div>
    <section className="testimonial py-5">
        <div className="container mb-4">
            <p className="h6 text-primary text-center">Client talk about us</p>
            <h2 className="section-heading mt-2 mb-4 text-center">Thousands of Customers are benefiting from SalezShark Engage</h2>
            <div className="owl-carousel" id="testimonialCarousel">
                <div className="testimonial-item">
                    <p className="text-center quoted-text"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>
                    <div className="d-flex align-items-center user-img mx-auto">
                        <figure className="m-0">
                            <img src={ImgUser} alt="user" />
                        </figure>
                        <div className="name">
                            <h5 className="m-0">J.S Bharti</h5>
                            <p className="mt-2 mb-0 text-primary">Ceo, HCL</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <div className="py-xl-3"></div>
            </section>
        )
    }
}

export default Blog;
