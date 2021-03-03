import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import './assets/font/bitter/stylesheet.css';
import './assets/font/poppins/stylesheet.css';
import './assets/css/grid.min.css';
import './assets/css/animation.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import App from './App';
import Header from './header/Header';
import Footer from './footer/Footer';
import reportWebVitals from './reportWebVitals';
import './assets/css/style.css';
import OwlCarousel from 'react-owl-carousel';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
