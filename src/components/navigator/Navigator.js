import { React } from "react";

import { Anchor } from "@mantine/core";

import styles from "./Navigator.module.css";

const Navigator = () => {
  const navBars = [
    {
      sect: "#about",
      name: "About",
    },
    {
      sect: "#skills",
      name: "Content",
    },
    // {
    //   sect: "#skills",
    //   name: "Skills",
    // },
    // {
    //   sect: "#projects",
    //   name: "Projects",
    // },
  ];


  return (
    <div className={styles.navBarWrapper}>
      {navBars.map((item, idx) => {
        return (
          <nav className={styles.navBar} key={idx}>
            <a className={styles.navLinks} href={item.sect}>
              {item.name}
            </a>
          </nav>
        );
      })}
    </div>
  );
};

export default Navigator;
