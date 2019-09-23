import React, { Component } from "react";
import Media from "react-responsive";

const getTime = () => {
  let time = new Date();
  return time.toTimeString().slice(0, 5);
};

export default props => (
  <>
    <div id={props.id}>
      <span className="title">Recent Activity</span>
      <Media query="(min-width: 769px)">
        <ul className="list">
          <li className="list-item">hello</li>
          <li className="list-item">Huewo</li>
          <li className="list-item">Huewo</li>
          <li className="list-item">Huewo</li>
          <li className="list-item">Huewo</li>
        </ul>
      </Media>
      <Media query="(max-width: 768px)">
        <ul className="list">
          <li className="list-item">hello</li>
          <li className="list-item">Huewo</li>
          <li className="list-item">Huewo</li>
        </ul>
      </Media>
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

      @media only screen and (max-width: 768px) {
        div{
          padding:15px 0 0 20px;
        }
        .title {
          font-size: 14pt;
        }
        ul {
          margin-left: 20px;
        }
        li {
          margin-bottom: 10px;
        }
        li:after {
          padding-right: 10px;
          float:right;
          content: "${getTime()}";
        }
      }
    `}</style>
  </>
);
