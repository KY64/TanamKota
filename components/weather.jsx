import React, { Component } from "react";
import Media from "react-responsive";

class Weather extends Component {
  state = {};

  render() {
    return (
      <div id={this.props.id} className="d-flex">
        <div className="item1">&nbsp;</div>
        <div className="item2">&nbsp;</div>
        <div className="item3">&nbsp;</div>
        <div className="item4">&nbsp;</div>
        <div className="item5">&nbsp;</div>

        <style jsx>{`
          .d-flex {
            
          }
          .container {
            display: grid;
            grid-template-areas: "icon1 info1 border icon2 info2";
          }
          .item1 {
            background: green;
          }
          .item2 {
            background: grey;
          }
          .item3 {
            background: yellow;
          }
          .item4 {
            background: orange;
          }
          .item5 {
            background: skyblue;
          }
        `}</style>
      </div>
    );
  }
}

export default Weather;
