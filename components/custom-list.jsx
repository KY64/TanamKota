import React, { Component } from "react";
import Media from "react-responsive";

export default props => (
  <React.Fragment>
    <div id={props.id}>

      <span className="title">Recent Activity</span>
      <ul className="list">
        <li className="list-item">hello</li>
        <li className="list-item" />
        <li className="list-item" />
        <li className="list-item" />
        <li className="list-item" />
      </ul>
    </div>
    <style jsx>{`
      .title {
        font-size: 18pt;
      }
      ul {
        list-style: none;
        border-left: 3px solid #77e681;
        margin-left: 50px;
      }
      li {
        margin-bottom: 20px;
        position: relative;
        top: -2px;
      }
      li:before {
        width: 12px;
        height: 12px;
        border-radius: 100px;
        background: #77e681;
        margin-left: -48px;
        margin-right: 20px;
        display: inline-block;
        content: "";
      }
    `}</style>
  </React.Fragment>
);
