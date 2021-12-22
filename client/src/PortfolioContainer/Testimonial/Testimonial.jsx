import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "../Testimonial/Testimonial.css"

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
      return;
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubcription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1000: {
            items: 3,
        },
    },
};



  return (
    <div>
      {/* <ScreenHeading
        title={'Testimonios'}
        subHeading= {'Lo que mi cliente dice de mí'}
      />
      <section className='testimonial-section fade-in' id={props.id || ''}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                        <i className='fa fa-quote-left'/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className='fa fa-quote-right'/>
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src='img/Testimonial/lady.png' alt='no internet connection'>
                    </img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                        <i className='fa fa-quote-left'/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className='fa fa-quote-right'/>
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src='img/Testimonial/mike.png' alt='no internet connection'>
                    </img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                        <i className='fa fa-quote-left'/>
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className='fa fa-quote-right'/>
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src='img/Testimonial/lady.png' alt='no internet connection'>
                    </img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>



            </OwlCarousel>
          </div>
        </div>
      </section>
       */}
    </div>
  )
}

