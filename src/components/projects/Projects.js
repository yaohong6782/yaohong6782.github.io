import React from "react";

import styles from "./Projects.module.css";
import todo from "../../images/todo-img.jpg";
import redditnews from "../../images/reddit-news-img.png";
import unsorted from "../../images/unsorted.png";
import sorted from "../../images/sorted.png";

import {
  Card,
  Image,
  Text,
  Grid,
  Button,
  Group,
  Paper,
  Container,
} from "@mantine/core";

const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      title: "To-do List",
      about: "To understand a MERN Application is being built",
      objective:
        "Picking up MERN Stack and APIs. A Sandbox environment to be built on for future development as I progress and learn",
      tags: ["MongoDB", "ExpressJS", "React", "NodeJS"],
      images: todo,
      github: "https://github.com/yaohong6782/First-Todo-MERN",
    },

    {
      id: 4,
      title: "Reddit Thread Summarised",
      about: "Keep track of my popular sub reddits easier",
      objective:
        "For me to keep track of my popular sub-reddit threads to save time as I am lazy to constantly open new tabs",
      images: redditnews,
      tags: ["ReactJS", "ChakraUI"],
      github: "https://github.com/yaohong6782/reddit-newspaper",
    },

    {
      id: 3,
      title: "Sorting Visualiser",
      about: "Visualise how different sorting algorithm are executed",
      objective: "SDLC and Boundary-Controller-Entity architecture",
      images: unsorted,
      sorted,
      tags: ["React", "Javascript", "Sorting"],
      github: "https://github.com/yaohong6782/sorting-visualiser",
      demo: "https://sorting-visualiser-738ffc.netlify.app/",
    },
  ];
  return (
    <section id="projects">
      <h2>Experiments</h2>
      <Grid>
        {ProjectList.map((item, idx) => {
          return (
            <Grid.Col className={styles.gridContainer} key={idx} span={3}>
              <Card className={styles.cardContainer}>
                <div className={styles.titleContainer}> {item.title}</div>
                <div className={styles.tagsContainer}>
                  {item.tags.map((tag, idx) => {
                    return (
                      <div key={idx} className={styles.tag}>
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.aboutContainer}>{item.about}</div>
                <div className={styles.githubContainer}>
                  {item.github && (
                    <a
                      target="blank"
                      className={styles.githubWrapper}
                      href={item.github}
                    >
                      Github
                    </a>
                  )}

                  {item.demo && (
                    <a
                      target="blank"
                      className={styles.githubWrapper}
                      href={item.demo}
                    >
                      Demo
                    </a>
                  )}
                </div>
                <br></br>
                <div className={styles.imageContainer}>
                  {item.images && <Image src={item.images} />}{" "}
                </div>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </section>
  );
};

export default Projects;

/* 
      <Grid grow gutter="lg">
        {ProjectList.map((item, idx) => {
          return (
            <Grid.Col className={styles.gridContainer} key={idx} span={3}>
              <Card className={styles.cardContainer}>
                <div className={styles.titleContainer}> {item.title}</div>
                <div className={styles.tagsContainer}>
                  {item.tags.map((tag, idx) => {
                    return (
                      <div key={idx} className={styles.tag}>
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.aboutContainer}>{item.about}</div>
                <div className={styles.githubContainer}>
                  {item.github && (
                    <a
                      target="blank"
                      className={styles.githubWrapper}
                      href={item.github}
                    >
                      Github
                    </a>
                    
                  )}
                  
                  {item.demo && (
                    <a
                      target="blank"
                      className={styles.githubWrapper}
                      href={item.demo}
                    >
                      Demo
                    </a>
                  )}
                </div>
                <br></br>
                <div className={styles.imageContainer}>
                  {item.images && <Image src={item.images}/> }{" "}
                </div>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>

*/
