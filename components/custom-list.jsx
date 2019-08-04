import React, { Component } from "react";

const getTime = () => {
  let time = new Date()
  return time.toTimeString().slice(0,5)
}

export default props => (
  <React.Fragment>
    <div id={props.id}>

      <span className="title">Recent Activity</span>
      <ul className="list">
        <li className="list-item">hello</li>
        <li className="list-item">Huewo</li>
        <li className="list-item">Huewo</li>
        <li className="list-item">Huewo</li>
        <li className="list-item">Huewo</li>
      </ul>
    </div>
    <style jsx>{`
    div{
      padding:30px 0 0 40px;
    }
      .title {
        font-size: 18pt;
        font-weight: 300;
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
      li:after {
        padding-right: 120px;
        float:right;
        font-size: 10pt;
        font-weight: 300;
        content: "${getTime()}";
      }
    `}</style>
  </React.Fragment>
);
