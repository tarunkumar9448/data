import React, { Component } from 'react';
import PlayIcon from '../assets/img/home/play.png';
import HeaderImg from '../assets/img/pricing/banner.png';
import LeftImg from '../assets/img/home/left-bg.png';
import Img1 from '../assets/img/home/1.png';
import Img2 from '../assets/img/home/2.png';
import Img3 from '../assets/img/home/3.png';
import Img4 from '../assets/img/home/4.png';
import Img5 from '../assets/img/home/5.png';
import ImgPricing from '../assets/img/pricing/img-left.png';
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

class Price extends Component {

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
            <section className="price-section py-5">
                <div className="container">
                    <p className="text-center h6 text-primary my-0">Lorrim-ipsum</p>
                    <h2 className="text-center section-heading mt-2 mb-4">Cjoose that right plan for you</h2>
                    <div className="owl-carousel" id="priceCarousel">
                        <div className="get-box py-4 px-3 text-center">
                            <div className="shadow rounded price-box bg-white p-3 p-xl-4">
                                <h3 className="section-heading mt-2">Pat as you go</h3>
                                <p className="text-info my-2 h6">&nbsp;</p>
                                <span className="d-block">Start at</span>
                                <strong className="text-success h1">$10</strong>
                                <p className="my-3">Minimum 100 credit</p>
                                <input type="text" placeholder="Enter number of credit to buy" className="input-style" />
                                <p className="my-2 text-info">&nbsp;</p>
                                <a href="#" className="btn btn-success mb-3 py-2 mx-auto">Subscribe Now</a>
                                <ul className="text-left m-0 pl-4">
                                    <li>Lorem Ipsum is simply dummy text of the.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="get-box py-4 px-3 text-center">
                            <div className="shadow rounded price-box bg-white p-3 p-xl-4">
                                <h3 className="section-heading mt-2">Daily Creadit</h3>
                                <p className="text-info my-2 h6">Subscription</p>
                                <span className="d-block">Start at</span>
                                <strong className="text-success h1">$15/mo</strong>
                                <p className="my-3">Save 6% VS. Pay as you go</p>
                                <input type="text" placeholder="Enter number of credit to buy" className="input-style" />
                                <p className="my-2 text-info">You have used 20.000</p>
                                <a href="#" className="btn btn-primary mb-3 py-2 mx-auto">Activated</a>
                                <ul className="text-left m-0 pl-4">
                                    <li>Lorem Ipsum is simply dummy text of the.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="get-box py-4 px-3 text-center">
                            <div className="shadow rounded price-box bg-white p-3 p-xl-4">
                                <h3 className="section-heading mt-2">Monthly Creadit</h3>
                                <p className="text-info my-2 h6">Subscription</p>
                                <span className="d-block">Start at</span>
                                <strong className="text-success h1">$30/mo</strong>
                                <p className="my-3">Save 6% VS. Pay as you go</p>
                                <input type="text" placeholder="Enter number of credit to buy" className="input-style" />
                                <p className="my-2 text-info">&nbsp;</p>
                                <a href="#" className="btn btn-success mb-3 py-2 mx-auto">Subscribe Now</a>
                                <ul className="text-left m-0 pl-4">
                                    <li>Lorem Ipsum is simply dummy text of the.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-xl-4"></div>
            <section className="database py-5 mt-lg-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <p className="h6 text-primary my-0">Lorem Ipsem</p>
                            <h2 className="section-heading mt-2 mb-4">Standard dummy text ever since the 1500s</h2>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>It is a long established fact Ipsum is that it has a more-or-less that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <a href="#" className="text-success link-arrow">Activate Lines</a>
                        </div>
                        <div className="col-md-6">
                            <img src={ImgPricing} alt="" />
                        </div>
                    </div>
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

export default Price;
