import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import styles from "./Education.module.css";

import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const EducationList = [
    {
      id: 1,
      school: "University of Wollonggong",
      where: "Singapore Insitute of Management",
      course: "Computer Science - Cybersecurity",
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
      <h1 className={styles.title}>Education</h1>
      <VerticalTimeline lineColor={"#0F3D3E"}>
        {EducationList.map((item, id) => {
          return (
            <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#E2DCC8",
                color: "#000000",
              }}
              contentArrowStyle={{
                borderRight: "15px solid  rgb(4, 32, 54)",
              }}
              date={item.duration}
              iconStyle={{ background: "#E2DCC8", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">{item.school}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.where}
              </h4>
              <p>{item.course}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
