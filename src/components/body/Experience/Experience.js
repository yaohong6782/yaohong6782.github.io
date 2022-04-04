import React from "react";

import "./Experience.css";

const Experience = () => {
  const WorkList = [
    {
      id: 1,
      exp: "Onwards Media Group Pte Ltd",
      objective:
        "Gain exposure to the industry and integrate a developing system which the company has developed",
      department: "Freeboh (Shift-Based Job Finding Platoform)",
      role: "Intern",
    },
    {
      id: 2,
      exp: "Changi Airport Group",
      objective:
        "Final Year Project - Implement an IoT system to improve QOL for monitoring of data",
      department: "IOT Student Project with CAG",
      role: "Student Developer",
    },
  ];
  return (
    <section id="experience" className="section__experience">
      <h2>Experience</h2>
      <h5>My past related experiences</h5>
      <br></br>
      <div className="container work__container">
        {WorkList.map((item, idx) => {
          return (
            <article className="work__item" key={idx}>
              <div className="work__title">
                <h3>{item.exp}</h3>
              </div>
              <small>{item.objective}</small>
              <div className="work__department">
                <small>Department : {item.department}</small>
              </div>
              <div className="work__role">
                <small>Role : {item.role}</small>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
