import React from "react";
import "./Header.css";
import me from "../../images/me.jpg";
import mytestimage from "../../images/me-test.png"
import Contact from "../body/Contact/Contact";
const Header = () => {
  return (

      <div id="home" className="wrapper">
          <div className="titles-wrapper">
            <h4>Hi, I'm </h4> <h3 className="my-name"> Yao Hong </h3>
            <h4 className="aspiration">an aspiring Software Developer</h4>
          </div>

        <div className="image-contact-wrapper">
          <img src={me} alt="me" className="own-photo" />
          <Contact />
        </div>
      </div>

  );
};

export default Header;
