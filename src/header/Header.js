import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import Price from '../price/Price';
import HeaderLogo1 from  '../assets/img/header-logo.png';
import HeaderLogo2 from  '../assets/img/footer-logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <Router>
            <header className="position-fixed-top slow-2x">            
                <nav>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3">
                                <div className="d-flex align-items-center py-2">
                                    <div className="logo slow-2x">
                                        <Link to="/" className="d-block">
                                            <img src={HeaderLogo1} alt="data shark" className="d-xl-block d-none dark-logo" />
                                            <img src={HeaderLogo2} alt="data shark" className="d-xl-none d-block white-logo" />
                                        </Link>
                                    </div>
                                    <div id="hamburger" className="ml-auto mr-3 d-xl-none">
                                        <span className="slow-2x"></span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="navigation slow-2x">
                                    <ul className="mt-3 my-lg-0 p-0 d-xl-flex align-items-center justify-content-xl-end">
                                        <li className="my-1"><Link to="/about" className="d-block p-3 px-xl-4">About Us</Link></li>
                                        <li className="my-1"><Link to="/price" className="d-block p-3 px-xl-4">Price</Link></li>
                                        <li className="my-1"><Link to="/blog" className="d-block p-3 px-xl-4">Blog</Link></li>
                                        <li className="my-1"><Link to="/faq" className="d-block p-3 px-xl-4">Faq</Link></li>
                                        <li className="my-1"><Link to="/contact" className="d-block p-3 px-xl-4">Contact Us</Link></li>
                                        <li className="my-1"><Link to="/login" className="d-block p-3 px-xl-4">Login</Link></li>
                                        <li className="py-3 my-2"><a href="#" className="d-inline-block py-2 px-3 bage bage-success">Sign up for Free</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
              <Switch>
                    <Router path="/price">
                    <Price />
                  </Router>
                  <Router path="/about">
                    <About />
                  </Router>
                 <Router path="/">
                    <Home />
                  </Router>
            </Switch>
        </Router>
        )
    }
}

export default Header;
