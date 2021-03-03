import React, {Component} from 'react';
import FooterLogo from '../assets/img/footer-logo.png';
import './Footer.css';

class Footer extends Component {
      render() {
  return (
    <footer class="footer">
        <div class="container py-3 mb-4 mb-xl-5 pb-xl-5">
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 order-12 order-md-1 pt-4 pt-md-0">
                    <div class="footer-logo">
                        <a href="#" class="d-block">
                            <img src={FooterLogo} alt="data shark" />
                        </a>
                    </div>
                    <p class="d-flex align-items-center social my-4">
                        <a href="#" class="icon slow-2x face mr-1"></a>
                        <a href="#" class="icon slow-2x insta mx-1"></a>
                        <a href="#" class="icon slow-2x twet mx-1"></a>
                        <a href="#" class="icon slow-2x link mx-1"></a>
                    </p>
                </div>
                <div class="col-6 col-md-4 col-lg-3 order-md-2">
                    <h4 class="text-white">Company</h4>
                    <ul class="m-0 p-0">
                        <li><a href="#" class="d-block py-1">About Us</a></li>
                        <li><a href="#" class="d-block py-1">Customers</a></li>
                        <li><a href="#" class="d-block py-1">Pricing</a></li>
                        <li><a href="#" class="d-block py-1">Contact Us</a></li>
                        <li><a href="#" class="d-block py-1">Blog</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-4 col-lg-3 order-md-3">
                    <h4 class="text-white">Featured</h4>
                    <ul class="m-0 p-0">
                        <li><a href="#" class="d-block py-1">Sales Automation</a></li>
                        <li><a href="#" class="d-block py-1">Marketing Automation</a></li>
                        <li><a href="#" class="d-block py-1">Relationship Intelligence</a></li>
                        <li><a href="#" class="d-block py-1">Dynamic Reporting</a></li>
                        <li><a href="#" class="d-block py-1">Verified Data Solution</a></li>
                        <li><a href="#" class="d-block py-1">Integrations</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-3 order-md-4">
                    <h4 class="text-white">Lagal</h4>
                    <ul class="m-0 p-0">
                        <li><a href="#" class="d-block py-1">Privacy Policy</a></li>
                        <li><a href="#" class="d-block py-1">Security</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="copy-text text-center m-0 py-3">© 2021 DataShark.com. All rights reserved.</p>
    </footer>
  );
}
}

export default Footer;
