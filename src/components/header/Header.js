import React from "react";
import "./Header.css";
import me from "../../images/me.jpg";
import mytestimage from "../../images/me-test.png";
import Contact from "../body/Contact/Contact";
const Header = () => {
  return (
    <div id="home" className="wrapper">
      <div className="titles-wrapper">
        <h4>HELLO THERE ! :D </h4>
        <h3 className="my-name">I'm Yao Hong </h3>
      </div>

      <div className="image-contact-wrapper">
        <img src={me} alt="me" className="own-photo" />
        <Contact />
      </div>
    </div>
  );
};

export default Header;
