import React, { Component } from "react";
import Media from "react-responsive";

export default props => (
  <Media query="(min-width: 769px)">
    <header id={props.id}>
      <span id="bell-icon" className="fas fa-bell" />
      <span id="user-icon" className="fas fa-user-circle" />
      <span id="username" />

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
        #username:before {
          float: right;
          position: relative;
          color: #555;
          top: 3px;
          right: 30px;
          font-size: 12pt;
          content: "Usman Namsu";
        }
      `}</style>
    </header>
  </Media>
);
