import React from "react";

import styles from "./Skills.module.css";

const Skills = () => {
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

    // {
    //   id: 5,
    //   type: "MySQL",
    //   icon: (
    //     <img
    //       src="https://img.icons8.com/material-rounded/24/000000/mysql-logo.png"
    //       alt="git-img"
    //     />
    //   ),
    // },
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
      type: "Angular",
      icon: (
        <img
          src="https://img.icons8.com/color/48/000000/angularjs.png"
          alt="angular-img"
        />
      ),
    },
  ];
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className={styles.container}>
        <p className={styles.title}>
          <span>Experienced</span>
        </p>
        <div className={styles.wrapper}>
          {ProgrammingLanguages.map((item, idx) => {
            return (
              <div key={idx} className={styles.container}>
                <div className={styles.icon}>{item.icon} </div>
                <div className={styles.type}>{item.type}</div>
              </div>
            );
          })}
        </div>

        <br></br>
        <p className={styles.title}>
          <span>Experimented</span>
        </p>
        <div className={styles.wrapper}>
          {TechnologiesList.map((item, idx) => {
            return (
              <div key={idx} className={styles.container}>
                <div className={styles.icon}>{item.icon} </div>
                <div className={styles.type}>{item.type}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h5 className={styles.credits}>
          <a target="blank" href="https://icons8.com" className={styles.credit}>
            Icons taken from Icons8
          </a>
        </h5>
      </div>
    </section>
  );
};

export default Skills;
