import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
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

      {/* figure out how to implement into a map */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </section>
  );
};

export default Education;
