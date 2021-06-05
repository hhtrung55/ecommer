import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Social extends Component {
  render() {
    return (
      <div className="fix-div-social">
        <ul className="fix-social social-link">
          <li className="twitter">
            <Link
              to={{ pathname: "https://twitter.com/" }}
              data-toggle="tooltip"
              title="Twitter"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </Link>
          </li>
          <li className="google-plus">
            <Link
              to={{ pathname: "https://plus.google.com/discover/" }}
              data-toggle="tooltip"
              title="Google Plus"
            >
              <i className="fa fa-google-plus" />
            </Link>
          </li>
          <li className="facebook">
            <Link
              to={{ pathname: "https://facebook.com" }}
              data-toggle="tooltip"
              title="Facebook"
            >
              <i className="fa fa-facebook" />
            </Link>
          </li>
          <li className="youtube">
            <Link
              to={{ pathname: "https://youtube.com" }}
              data-toggle="tooltip"
              title="Youtube"
            >
              <i className="fa fa-youtube" />
            </Link>
          </li>
          <li className="instagram">
            <Link
              to={{ pathname: "https://instagram.com" }}
              data-toggle="tooltip"
              title="Instagram"
            >
              <i className="fa fa-instagram" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
