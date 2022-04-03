import React from "react";

import "./Technology.css";

const Techonology = () => {
  const ProgrammingLanguages = [
    {
      id: 1,
      type: "Java",
      icon: (
        <img
          src="https://img.icons8.com/color/50/000000/java-coffee-cup-logo--v1.png"
          alt="java-img"
        />
      ),
    },
    {
      id: 2,
      type: "Python",
      icon: (
        <img
          src="https://img.icons8.com/color/50/000000/python--v1.png"
          alt="python-img"
        />
      ),
    },
    {
      id: 3,
      type: "JavaScript",
      icon: (
        <img
          src="https://img.icons8.com/color/48/000000/javascript--v1.png"
          alt="js-img"
        />
      ),
    },
    {
      id: 4,
      type: "ReactJS",
      icon: (
        <img
          src="https://img.icons8.com/office/40/000000/react.png"
          alt="react-img"
        />
      ),
    },

    {
      id: 5,
      type: "MySQL",
      icon: (
        <img
          src="https://img.icons8.com/material-rounded/24/000000/mysql-logo.png"
          alt="git-img"
        />
      ),
    },
    {
      id: 6,
      type: "Git",
      icon: (
        <img
          src="https://img.icons8.com/color/48/000000/git.png"
          alt="git-img"
        />
      ),
    },
  ];

  const TechnologiesList = [
    {
      id: 1,
      type: "MongoDB",
      icon: (
        <img
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
          alt="react-img"
        />
      ),
    },
    {
      id: 2,
      type: "Flask",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
          alt="flask-img"
        />
      ),
    },
    {
      id: 3,
      type: "TBA...",
    },
  ];
  return (
    <section id="tech">
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="experience__languages">
          <h3>Experienced with</h3>

          <div className="experience__content">
            {ProgrammingLanguages.map((items, idx) => {
              return (
                <div className="experience__details" key={idx}>
                  <div className="icons-img">{items.icon}</div>
                  <h4 className="experience__type">{items.type}</h4>
                </div>
              );
            })}
          </div>
        </div>

        <div className="experience__tech">
          <h3>Experimented with</h3>
          <div className="experience__content">
            {TechnologiesList.map((items, idx) => {
              return (
                <article className="experience__details" key={idx}>
                  <div className="icons-img">{items.icon}</div>
                  <h4 className="experience__type">{items.type}</h4>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div>
      <h5 className="icon__credits">
        <a target="blank" href="https://icons8.com" className="icons__credit">
          Icons taken from Icons8
        </a>
      </h5>
      </div>
    </section>
  );
};

export default Techonology;
