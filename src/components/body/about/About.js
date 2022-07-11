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
              <small>Tech Industry</small>
              <br/>
              <small>Finding interest to solidify myself in Tech</small>
            </article>

            <article className="about__card">
              <IoGameControllerOutline className="about__icon" />
              <h2>Favorites</h2>
              <small>Sitting and Watching Video Programs</small>
              <br />
              <small>Fullstack Dev and ReactJS</small>
            </article>

            <article className="about__card">
              <GiVacuumCleaner className="about__icon" />
              <h2>Miscellaneous</h2>
              <small>I like to analyse and clean up codes</small>
              <br />
              <small>Data Structure and Algorithms</small>
            </article>
          </div>
          <p>I'm an Introvert</p>
        </div>
      </div>
    </section>
  );
};

export default About;
