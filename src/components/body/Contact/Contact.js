import React from 'react'
import gitImg from "../../../images/github.png"
import linkedin from "../../../images/linkedin.png"
import "./Contact.css";

// call at Header component
const Contact = () => {
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
          icon: linkedin ,
        },
    ];
  return (
    <div className='social-contact'>

        {ContactInfo.map((item) => {
            return (
                <a href={item.link} key={item.id}>
                    <div className='icons'>
                        <img src={item.icon} alt="icon" className='social-icon'/>
                    </div>
                </a>
            )
        })}
    </div>
  )
}

export default Contact