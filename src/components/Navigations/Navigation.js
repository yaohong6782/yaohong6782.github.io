import React, { useState } from "react";
import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaTasks, FaUserAlt, FaUserGraduate, FaBook } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

const Navigation = () => {
  const [currentNav, setCurrentNav] = useState("#home");
  const hightLightActiveNav = (props) => {
    switch (props) {
      case "#home":
        setCurrentNav("#home");
        break;
      case "#about":
        setCurrentNav("#about");
        break;
      case "#education":
        setCurrentNav("#education");
        break;
      case "#projects":
        setCurrentNav("#projects");
        break;
      case "#experience":
        setCurrentNav("#experience");
        break;
      case "#tech":
        setCurrentNav("#tech");
        break;
      default:
        setCurrentNav("#home");
    }
  };
  return (
    <nav>
      <a
        href="#home"
        onClick={() => hightLightActiveNav("#home")}
        className={currentNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => hightLightActiveNav("#about")}
        className={currentNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#education"
        onClick={() => hightLightActiveNav("#education")}
        className={currentNav === "#education" ? "active" : ""}
      >
        <FaUserGraduate />
      </a>
      <a
        href="#projects"
        onClick={() => hightLightActiveNav("#projects")}
        className={currentNav === "#projects" ? "active" : ""}
      >
        <FaTasks />
      </a>
      <a
        href="#experience"
        onClick={() => hightLightActiveNav("#experience")}
        className={currentNav === "#experience" ? "active" : ""}
      >
        <BsBriefcaseFill />
      </a>
      <a
        href="#tech"
        onClick={() => hightLightActiveNav("#tech")}
        className={currentNav === "#tech" ? "active" : ""}
      >
        <FaBook />
      </a>
    </nav>
  );
};

export default Navigation;
