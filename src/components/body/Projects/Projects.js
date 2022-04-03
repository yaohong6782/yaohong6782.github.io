import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { CgCardSpades } from "react-icons/cg";
import { IoFastFoodOutline } from "react-icons/io5";

import "./Project.css";
const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      title: "Food Order Modal Page",
      about: "Modal Section of a Frontend",
      objective:
        "Diving deeper into React Hooks, Passing of Props and Components",
      tags: ["ReactJS"],
      github: "",
      image: <IoFastFoodOutline />,
    },
    {
      id: 2,
      title: "Console Black Jack Game",
      about: "Generic BlackJack Console Game",
      objective: "Implement Object-Oriented Programming and Win the Dealer!",
      tags: ["Java", "OOP"],
      github: "https://github.com/yaohong6782/Blackjack",
      image: <CgCardSpades />,
    },
  ];
  return (
    <section id="projects">
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
                {item.tags.map((tags,idx) => {
                  return <div className="tags" key={idx}>{tags}</div>;
                })}
              </div>
              <div className="github__link">
                {item.github && (
                  <a
                    target="blank"
                    className="link__directory"
                    href={item.github}
                  >
                    <div className="link__button">GitHub</div>
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
