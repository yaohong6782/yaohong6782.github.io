import React from "react";

import me from "../../images/me.jpg";
import me2 from "../../images/orangemushroom.jpg";
import gitImg from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

import styles from "./About.module.css";

const About = () => {
  const ContactInfo = [
    {
      id: 1,
      platform: "GitHub",
      link: "https://github.com/yaohong6782",
      icon: gitImg,
    },

    {
      id: 2,
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/Yao-hong/",
      icon: linkedin,
    },
  ];
  return (
    <section id="about" className={styles.wrapper}>
    
      <div>
        <h1>
          <span className={styles.notBold}>Hello! I'm </span>
          <span className={styles.bold}>Yao Hong</span>
        </h1>

        <h1 className={styles.description}>Software Engineer</h1>

        {ContactInfo.map((item) => {
          return (
            <a
              href={item.link}
              key={item.id}
              target="_blank"
              rel="noreferrer"
              className={styles.iconLinks}
            >
              <img src={item.icon} alt="icon" className={styles.icon} />
            </a>
          );
        })}
      </div>
      <div className={styles.imageWrapper}>
        <img src={me} alt="me" className={styles.ownPhoto} />
        {/* <img src={me2} alt="me" className={styles.ownPhoto} /> */}
      </div>
    </section>
  );
};

export default About;
