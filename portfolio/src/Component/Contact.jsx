import React, { Component } from "react";
import axios from "axios";
import "./css/contact.css";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      successMessage: "",
      errorMessage: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;

    try {
      const response = await axios.post("http://localhost:5002/api/contacts", {
        name,
        email,
        message,
      });
      this.setState({
        successMessage: "Your message has been sent successfully!",
        errorMessage: "",
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      this.setState({
        errorMessage:
          "There was an error sending your message. Please try again.",
        successMessage: "",
      });
    }
  };

  render() {
    const { successMessage, errorMessage } = this.state;

    return (
      <div id="contact" className="contact">
        <h2 className="contact-head">Contact me</h2>
        <div className="contact-container">
          <div className="row">
            <div className="contact-leftSide">
              <form onSubmit={this.handleSubmit}>
                <div className="input-container">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                    placeholder="Type your message here....."
                  ></textarea>
                </div>
                <button type="submit" className="submitBtn">
                  Submit
                  {/* <i
                    className="fa fa-paper-plane"
                    aria-hidden="true"
                    style={{ marginLeft: "10px" }}
                  ></i> */}
                </button>
              </form>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="contact-rightside">
              <p>
                <i className="fa fa-at" aria-hidden="true"></i>
                <a href="mailto:avijangid7011@gmail.com">
                  avijangid7011@gmail.com
                </a>
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+918290274187">+91-8290274187</a>
              </p>
            </div>
          </div>
          <div className="contact-social-icons">
            <a
              href="https://www.linkedin.com/in/avinesh2001/"
              className="linkedin"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Avinesh-2001"
              className="github"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://leetcode.com/u/Avu_1981/"
              className="leetcode"
              title="LeetCode"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/avi_nesh_2001/"
              className="geeksforgeeks"
              title="GeeksforGeeks"
            >
              <i className="fas fa-laptop-code"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
