import React from "react";
import "../../style/Exercises.css";
import lungus from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const exerciseData = [
  {
    exerciseImg: lungus,
    exerciseTitle: "Healthy Life",
    exerciseDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinquis orci magna.",
  },
  {
    exerciseImg: yoga,
    exerciseTitle: "Increased Flexibility",
    exerciseDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinquis orci magna.",
  },
  {
    exerciseImg: extended,
    exerciseTitle: "Reducing Blood Pressure",
    exerciseDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinquis orci magna.",
  },
];

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Proin non urna ac est faucibus sagittis at a diam.
          </p>
        </div>
        {/* exercise list */}
        <div className="exercise__wrapper">
          {exerciseData?.map((item, i) => (
            <div
              className="exercise__item"
              data-aos="zoom-in"
              key={i}
              data-aos-duration="1500"
            >
              <span className="exercise__icon">
                <img src={item.exerciseImg} alt="" />
              </span>
              <div className="exercise__content">
                <h4>{item.exerciseTitle}</h4>
                <p>{item.exerciseDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exercises;
