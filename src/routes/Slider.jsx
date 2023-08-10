import React from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';




const Slider = () => {
    return (
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={2}
      >
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://www.museocamera.org/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/1875737343_museo-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>Museo Camera</h3>
                <p>Museum</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://dreamscapedesign.in/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/680403573_dreamscape-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>Dreamscape</h3>
                <p>Design Studio</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://formsdesign.in/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/1100402303_formsdesign-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>Forms Design Studio</h3>
                <p>Design Studio</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://formsdesign.in/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/1781086705_eqstone-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>EQ Stone</h3>
                <p>Property</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://formsdesign.in/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/1780970128_iocphinergy-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>IOC Phinergy</h3>
                <p>Industry</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://formsdesign.in/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/1557036591_propbridge-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>Prop Bridge</h3>
                <p>Property</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://formsdesign.in/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/1584416769_riseinfrainternational-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>Rise International</h3>
                <p>Property</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://formsdesign.in/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/504428561_riglamschool-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>Riglam School</h3>
                <p>School</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_main">
            <a href="https://formsdesign.in/" target="_blank">
              <div className="port_img">
                <img src="https://www.indiainternets.com/images/image-portfolio/494227768_npigroupindia-thamb.jpg" alt="" />
              </div>
              <div className="port_text">
                <h3>NPI Group</h3>
                <p>Property</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    );
  };
  
  export default Slider;
  