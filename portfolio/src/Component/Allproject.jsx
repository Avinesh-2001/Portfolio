import React, { Component } from "react";
import "./css/allproject.css";
import one from "./../Image/enndg.png";
import two from "./../Image/Bed (2).png";
import three from "./../Image/invoice.png";
import four from "./../Image/bmuaves.jpg";
import five from "./../Image/HR-dash.png";
import six from "./../Image/sales.png";
import seven from "./../Image/usstore.png";
import Footer from "./Footer";

export class Allproject extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const allprojects = [
      {
        id: 1,
        title: "Endangered.io",
        description:
          "Endangered.io is web platform raising awareness about endangered species, including mammals, sea creatures, & birds. It provides information on their conservation status, habitats, & the threats they face, promoting global conservation efforts.",
        image: one,
        link1: "https://avinesh-2001.github.io/Endangered.io/",
        link2: "https://github.com/Avinesh-2001/Endangered.io",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: 2,
        title: "MERN Health Furnish",
        description:
          "This project is a comprehensive website for Bajaj Wellmed International, built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It focuses on providing seamless access to healthcare solutions with an intuitive, user-friendly experience.",
        image: two,
        link1:
          "https://github.com/Avinesh-2001/Hospital-Ward-Furniture-Website",
        link2:
          "https://github.com/Avinesh-2001/Hospital-Ward-Furniture-Website",
        technologies: ["ReactJs", "Node.js", "Express.js", "MongoDB"],
      },
      {
        id: 3,
        title: "Proforma-Invoice Generator",
        description:
          "Proforma Invoice Generator: A web application built with HTML, CSS, and JavaScript, enabling users to create and download professional PDF invoices efficiently, streamlining the invoicing process for businesses and individuals.",
        image: three,
        link1: "https://avinesh-2001.github.io/Proforma-Invoice-Generator/",
        link2: "https://github.com/Avinesh-2001/Proforma-Invoice-Generator",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: 4,
        title: "BMU-Aves",
        description:
          "BMU AVES is a system designed to automate vehicle entry and exit. The system uses LPR technology and OCR to detect and recognize vehicle number plates, allowing authorized vehicles to pass through without manual intervention.",
        image: four, 
                link1: "https://avinesh-2001.github.io/BMU-AVES/",
        link2: "https://github.com/Avinesh-2001/BMU-AVES",
        technologies: [
          "HTML/CSS/JavaScript",
          "Python",
          "MySQL",
          "Raspberry Pi",
        ],
      },
      {
        id: 5,
        title: "HR Analytics Dashboard using Power BI",
        description:
          "An interactive dashboard that visualizes key HR metrics, including employee performance, retention rates, and workforce demographics, enabling data-driven decision-making and optimization of HR strategies.",
        image: five,
        link1:
          "https://github.com/Avinesh-2001/HR-Analytics-Dashboard-using-Power-BI",
        link2:
          "https://github.com/Avinesh-2001/HR-Analytics-Dashboard-using-Power-BI",
        technologies: ["PowerBi", "Power Query", "Dax Query"],
      },
      {
        id: 6,
        title: "Sales Dashboard using Power BI",
        description:
          "A dynamic Power BI sales dashboard that visualizes key sales metrics such as revenue, sales growth, and product performance, providing real-time insights for better decision-making, trend analysis, and goal tracking.",
        image: six,
        link1: "https://github.com/Avinesh-2001/Sales-Dashboard-using-Power-BI",
        link2: "https://github.com/Avinesh-2001/Sales-Dashboard-using-Power-BI",
        technologies: ["PowerBi", "Power Query", "Dax Query"],
      },
      {
        id: 7,
        title: "US Store Sales Manager Analysis Dashboard - Power Bi",
        description:
          "A comprehensive Power BI dashboard designed for US store sales managers, showcasing key metrics like total sales, selling products, and customer demographics, enabling data-driven insights for improving sales strategies and operational efficiency.",
        image: seven,
        link1:
          "https://github.com/Avinesh-2001/Us-Store-Sales-Analysis-Dashboard---Power-Bi",
        link2:
          "https://github.com/Avinesh-2001/Us-Store-Sales-Analysis-Dashboard---Power-Bi",
        technologies: ["PowerBi", "Power Query", "Dax Query"],
      },
    ];

    return (
      <>      <div className="allproject">
        <div className="allproject-header">
          <a href="/profile" class="profile">
            <i class="fa-solid fa-house" aria-hidden="true" title="home"></i>
          </a>
          <h1 className="allproject-h1">Projects</h1>
        </div>
        <div className="allproject-container">
          <div className="allproject-bodycontainer">
            {allprojects.map((project) => (
              <div className="allproject-box" key={project.id}>
                <div className="allprojectbox-header">
                  <h4>{project.title}</h4>
                </div>
                <div className="allprojectbox-image">
                  {project.image && (
                    <img src={project.image} alt={project.title} />
                  )}
                </div>
                <div className="allprojectbox-text">
                  <p>{project.description}</p>
                  <div className="allprojectbox-links">
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
      </div>
      <div>
        <Footer />
      </div>
      </>

    );
  }
}

export default Allproject;
