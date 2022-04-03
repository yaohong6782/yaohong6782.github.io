import React from "react";

import "./Education.css";

const Education = () => {
  const EducationList = [
    {
      id: 1,
      school: "University of Wollonggong",
      where: "",
      course: "Computer Science (Cybersecurity)",
      duration: "2020 - 2022",
    },
    {
      id: 2,
      school: "Temasek Polytechnic",
      where: "",
      course: "Diploma in Information Technology",
      duration: "2015 - 2018",
    },
  ];

  return (
    <section id="education">
      <h2>Education</h2>

      <div className="container education__container">
        {EducationList.map((item, id) => {
          return (
            <div className="education-wrapper" key={id}>
              <div className="edu__wrapper">
                <h3 className="edu-school">{item.school} </h3>
                <div className="edu__course-year">
                  <h3 className="edu-course">{item.course}</h3>
                  <small className="edu-year">{item.duration}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
