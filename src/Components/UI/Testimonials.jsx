// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../style/Testimonials.css";

// import required modules
import { EffectCards } from "swiper/modules";

import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2>Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>
                <h4>Jessica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  quis orci magna. Proin non urna ac est faucibus sagittis at a
                  diam. Cras ullamcorper lacus ut gravida sodales.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />
                </div>
                <h4>Jessica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  quis orci magna. Proin non urna ac est faucibus sagittis at a
                  diam. Cras ullamcorper lacus ut gravida sodales.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt="" />
                </div>
                <h4>Jessica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  quis orci magna. Proin non urna ac est faucibus sagittis at a
                  diam. Cras ullamcorper lacus ut gravida sodales.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
