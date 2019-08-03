import React, { Component } from "react";
import Media from "react-responsive";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
  <Media query="(min-width: 769px)">
    <header id={props.id}>
      <span id="bell-icon">
        <FontAwesomeIcon icon={faBell} />
      </span>
      <span id="user-icon">
        <FontAwesomeIcon icon={faUserCircle} />
      </span>

      <style jsx>{`
        header {
          display: inline;
          padding: 10px 0;
          text-align: center;
          width: 100%;
          height: 35px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        }

        #bell-icon {
          color: #0ebd1c;
          font-size: 16pt;
          vertical-align: bottom;
        }

        #user-icon {
          position: relative;
          color: #bdbdbd;
          font-size: 30pt;
          float: right;
          top: -5px;
          right: 20px;
        }
        #user-icon:before {
          position:relative;
          color: #555;
          top: -5px;
          right: 10px;
          font-size: 12pt;
          content: "Usman Namsu";
          vertical-align: middle;
        }
      `}</style>
    </header>
  </Media>
);
