import React from "react";

import { Card, Image, Text, Badge, Button, Group, Paper } from "@mantine/core";

import styles from "./Experience.module.css";

const Experience = () => {
  let WorkList = [
    {
      id: 1,
      exp: "Changi Airport Group",
      objective: [
        "Final Year Project - Implement an IoT system to improve QOL for monitoring of data",
        "Developed a Web application to Create, Read, Update and Delete of data passed from the monitoring devices",
      ],
      department: "IOT Student Project with CAG",
      role: "Student Developer",
      year: "Aug 2017 - Oct 2017",
    },
    {
      id: 2,
      exp: "Onwards Media Group Pte Ltd",
      objective: [
        "Worked on Android Applications using React Native",
        "Integrated TrueFace.ai API facial recognition into mobile application",
      ],
      department: "Freeboh (Shift-Based Job Finding Platform)",
      role: "Intern",
      year: "Nov 2017 - Feb 2018",
    },
    {
      id: 3,
      exp: "NCS Group",
      objective: [
        "Tech Refresh - Upgrading of Client's existing business logic to a newer and maintainable technology framework",
        "Worked mainly on Front-End components for reusability",
        ""
      ],
      department: "",
      role: "Software Engineer",
      year: "Jun 2022 - Present",
    },
  ];

  return (
    <section id="experience">
      <h2>Experiences</h2>
      <div>
        {WorkList.slice(0)
          .reverse()
          .map((work, idx) => {
            return (
              <div key={idx}>
                <b className={styles.exp}>{work.exp} </b>
                <br />
                <b className={styles.role}>{work.role}</b>
                <br />
                <b>{work.year}</b>
                {work.objective.map((obj, idx) => {
                  return (
                    <li key={idx}>
                      <b className={styles.objectives}>{obj}</b>
                    </li>
                  );
                })}
                <br />
                <br />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Experience;

/* 

     <Paper shadow="md" p="md" style={{ width: "100%" }}>
                  <b>{work.exp}</b>

                  <div>
                    <b>{work.role}</b>
                  </div>
                  <div>
                    <b>{work.year}</b>
                  </div>
                  {work.objective.map((obj, idx) => {
                    return <Text key={idx}>{obj}</Text>;
                  })}
                  </Paper>
                  <br></br>

                  */
