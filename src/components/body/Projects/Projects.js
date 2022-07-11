import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { CgCardSpades } from "react-icons/cg";
import { IoFastFoodOutline } from "react-icons/io5";
import {RiFootprintFill} from "react-icons/ri"

import { Card, Button} from "react-bootstrap";
import me from "../../../images/me.jpg"

import "./Project.css";
import { Carousel } from "bootstrap";
const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      title: "To-do List",
      about: "Modal Section of a Frontend",
      objective:
        "Leveraging MERN Stacks and Backend APIs. Sandbox to be built ontop for future development",

      tags: ["MongoDB","ExpressJS","React","NodeJS"],
      github: "https://github.com/yaohong6782/First-Todo-MERN",
      image: <IoFastFoodOutline />,
    },
    {
      id: 2,
      title: "Console Black Jack Game",
      about: "Generic BlackJack Console Game",
      objective: "Back to fundamentals of Object-Oriented Programming",
      tags: ["Java", "OOP"],
      github: "https://github.com/yaohong6782/Blackjack",
      image: <CgCardSpades />,
    },
    {
        id:3,
        title:"Desktop Application - TraceUnited",
        about:"User tracking and alert system",
        objective:"SDLC and Boundary-Controller-Entity architecture",
        tags:["Java", "MSSQL"],
        image:<RiFootprintFill/>
    }
  ];
  return (
    <section id="projects" className="section__projects">
      <h2>Welcome to my Experimental section</h2>
      <h5>My Experimentations</h5>
      <br></br>
      <div className="container project__container">
        {ProjectList.map((item, idx) => {
          return (
            <article className="project__item" key={idx}>
              <div className="project__item-image"></div>
              <div className="title__image">
                <h3>{item.title}</h3>
                {item.image}
              </div>
              <small>{item.objective}</small>
              <div className="project__tags">
                {item.tags.map((tags, idx) => {
                  return (
                    <div className="tags" key={idx}>
                      {tags}
                    </div>
                  );
                })}
              </div>
              <div className="github__link">
                {item.github && (
                  <a
                    target="blank"
                    className="link__directory"
                    href={item.github}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
