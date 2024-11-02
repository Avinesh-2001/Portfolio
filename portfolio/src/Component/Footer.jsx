import React, { Component } from "react";
import './css/footer.css';
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="copyRight">
          <p>
            Copyright &#169; {new Date().getFullYear()} Avinesh' Portfolio{" "}
            <i className="fa fa-book"></i>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
