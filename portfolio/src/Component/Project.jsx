import React, { Component } from "react";
import "./css/project.css";
import one from "./../Image/enndg.png";
import two from "./../Image/Bed (2).png";
import three from "./../Image/invoice.png";
import { Link } from "react-router-dom";
class Project extends Component {
  render() {
    const projects = [
      {
        id: 1,
        title: "Endangered.io",
        description:
          "Endangered.io is a web platform designed to raise awareness about the world's most endangered species, including mammals, sea creatures, and birds. Learn about their conservation status, habitats, and the threats they face, all in one interactive site.",
        image: one,
        link1: "https://avinesh-2001.github.io/Endangered.io/",
        link2: "https://github.com/Avinesh-2001/Endangered.io",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: 2,
        title: "Hospital Ward Manufacture",
        description:
          "This project is a comprehensive website for BWI, designed to provide visitors with seamless access to healthcare solutions. The website is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and focuses on delivering an intuitive and user-friendly experience.",
        image: two,
        link1:"https://github.com/Avinesh-2001/Hospital-Ward-Furniture-Website",
        link2: "https://github.com/Avinesh-2001/Hospital-Ward-Furniture-Website",
        technologies: ["ReactJs", "Node.js", "Express.js", "MongoDB"],
      },
      {
        id: 3,
        title: "Proforma-Invoice Generator",
        description:
          "Proforma Invoice Generator: A web application built with HTML, CSS, and JavaScript that allows users to create and download professional PDF invoices.",
        image: three,
        link1:"https://avinesh-2001.github.io/Proforma-Invoice-Generator/",
        link2: "https://github.com/Avinesh-2001/Proforma-Invoice-Generator",

        technologies: ["HTML", "CSS", "JavaScript"],
      },
    ];

    return (
      <div className="project">
        <h2 className="project-head">Projects</h2>
        <div className="project-container">
          <div className="project-bodycontainer">
            {projects.map((project) => (
              <div className="project-box" key={project.id}>
                <div className="projectbox-header">
                  <h4>{project.title}</h4>
                </div>
                <div className="projectbox-image">
                  {project.image && (
                    <img src={project.image} alt={project.title} />
                  )}
                </div>
                <div className="projectbox-text">
                  <p>{project.description}</p>
                  <div className="projectbox-links">
                    <a href={project.link1}>
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </a>
                    <a href={project.link2}>
                      <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="projectsViewAll">
          <Link to="/Allproject">
            <button className="viewAllBtn">
              View All
              <i class="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Project;
