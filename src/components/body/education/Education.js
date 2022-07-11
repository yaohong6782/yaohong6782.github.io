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
      <h2>Education</h2>


        <VerticalTimeline>
          {EducationList.map((item, id) => {
            return (
                
              <VerticalTimelineElement
                key={id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#51557E",
                  color: "#F0EBE3",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={item.duration}
                iconStyle={{ background: "#51557E", color: "#fff" }}           
              >         
                <h3 className="vertical-timeline-element-title"  >
                  {item.school}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">{item.where}</h4>
                <p>{item.course}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
   
    </section>
  );
};

export default Education;
