import React, { Component } from 'react';
import PlayIcon from '../assets/img/home/play.png';
import HeaderImg from '../assets/img/about/banner.png';
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
import './About.css';

class About extends Component {

    render() {
        return (
            <section>
                 <section className="home-banner about-bg mb-4 mb-lg-n4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-5">
                                <h1 className="banner-heading">
                                    About Us<br />
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
            <section className="about py-5">
                <div className="container p-3">
                    <p className="h6 text-primary text-center">About us</p>
                    <h2 className="section-heading mt-2 mb-4 text-center">About DataShark Pro</h2>
                    <p className="text-center mx-auto">It is a long established fact that a reader will belong established fact that a reader will be distracted by the readable content of aestablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p>
                </div>
    </section>
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

export default About;
