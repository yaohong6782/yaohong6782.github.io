import React from "react";
import { GiStairsGoal, GiSleepingBag, GiVacuumCleaner } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h2>More About Me</h2>

      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiStairsGoal className="about__icon" />
              <h2>Goals</h2>
              <medium>On a Job hunt for Entry Level Position</medium>
            </article>

            <article className="about__card">
              <IoGameControllerOutline className="about__icon" />
              <h2>Hobbies</h2>
              <medium>Video Games and Algorithms</medium>
            </article>

            <article className="about__card">
              <GiVacuumCleaner className="about__icon" />
              <h2>Miscellaneous</h2>
              <medium>I like to analyse and clean up codes</medium>
            </article>
          </div>
          <p>ASDF</p>
        </div>
      </div>
    </section>
  );
};

export default About;
