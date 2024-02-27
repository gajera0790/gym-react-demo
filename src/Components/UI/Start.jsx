import React from "react";
import "../../style/Start.css";
import trainerImg from "../../assets/img/trainer.png";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1800"
            />
          </div>

          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1800"
          >
            <h2 className="section__title">
              Ready to make a <span className="highlights">Change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis orci magna. Proin non urna ac est faucibus sagittis at a
              diam. Cras ullamcorper lacus ut gravida sodales.
            </p>

            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
