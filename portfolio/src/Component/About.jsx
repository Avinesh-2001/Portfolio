import React, { useState } from "react";
import Education from "./About/Education";
import Skills from "./About/Skills";
import Experience from "./About/Experience";
import about from "./../Image/aboutme.png";
import './css/about.css';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const shortBio = `I am a Computer Science Engineering graduate with a passion for 
    frontend development and API creation, equipped with a diverse 
    skill set in modern web technologies`;

  const fullBio = `. I am a dedicated Computer Science Engineering graduate 
    from BML Munjal University with a cumulative GPA of 8.04. I 
    am skilled in HTML, CSS, JavaScript, C/C++, Python, and SQL, 
    along with tools such as Jenkins, GitHub, Canva, Figma, 
    AutoCAD, Google Colab, and Jupyter. My experience includes 
    working with frameworks like React.js, Node.js, and 
    Express.js, as well as libraries such as OpenCV, Pandas, and 
    NumPy. Through hands-on projects and professional 
    experiences, I have developed a strong foundation in API 
    development, UI/UX design, and frontend development. I am 
    eager to apply my skills to meaningful projects in the tech 
    industry.`;

  const decorativeCircles = [
    { id: 1, backgroundColor: "#FF4081" },
    { id: 2, backgroundColor: "#FF4081" },
  ];
  

  

  return (
    <div
      className="main-container"
      
    >
      <section className="about">
        <div className="line-styling">
          {decorativeCircles.map((circle) => (
            <div
              key={circle.id}
              className="style-circle"
              style={{ backgroundColor: circle.backgroundColor }}
            />
          ))}
          <div className="style-line" style={{ backgroundColor: "#FF4081" }} />
        </div>

        <div className="about-container">
          <div className="about-image">
            <img
              src={about}
              alt="Profile picture"
              className="profile-picture"
              loading="lazy" // For better performance
            />
          </div>

          <div className="about-content">
            <h2 className="section-head">About Me ..</h2>
            <div className="bio-text">
              <p className="about-biotext">
                {(shortBio)}
                {expanded && fullBio}
              </p>
              <button
                className="read-more"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      
      <Skills />
      <Education />
      
    </div>
    
  );
};

export default About;
