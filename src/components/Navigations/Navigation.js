import React, { useState } from "react";
import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaTasks, FaUserAlt, FaUserGraduate, FaBook } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <nav>
      <a href="#home" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <FaUserAlt />
      </a>
      <a href="#education">
        <FaUserGraduate />
      </a>
      <a href="#projects">
        <FaTasks />
      </a>
      <a href="#experience">
        <BsBriefcaseFill />
      </a>
      <a href="#tech">
        <FaBook />
      </a>
    </nav>
  );
};

export default Navigation;
