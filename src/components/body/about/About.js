import React from "react";
import { GiStairsGoal, GiSleepingBag, GiVacuumCleaner } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiStairsGoal className="about__icon" />
              <h2>Current Goals</h2>
              <small>Being in the Tech Industry</small>
            </article>

            <article className="about__card">
              <IoGameControllerOutline className="about__icon" />
              <h2>Hobbies</h2>
              <small>Sitting and Watching Video Programs</small>
            </article>

            <article className="about__card">
              <GiVacuumCleaner className="about__icon" />
              <h2>Miscellaneous</h2>
              <small>I like to analyse and clean up codes</small>
            </article>
          </div>
          <p>I'm an Introvert</p>
        </div>
      </div>
    </section>
  );
};

export default About;
