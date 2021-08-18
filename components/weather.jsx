import React, { Component } from "react";
import Media from "react-responsive";

class Weather extends Component {
  state = {};

  render() {
    return (
      <Media query="(min-width: 769px)">
      <div id={this.props.id} className="container">
        <div className="item1"> <i className="fas fa-cloud-sun"></i> </div>
        <div className="item2"><b style={{fontSize:"24pt"}}>30<sup>o</sup>C</b>
        <br/>
        Cerah Berawan
        <br/>
        Surabaya
        </div>
        <div className="item3"></div>

        <div className="item4"><b style={{fontSize:"15pt"}}>BESOK</b> <br/> <i className="fas fa-cloud" style={{fontSize:"33pt",color:"#77E681"}}></i> </div>
        <div className="item5"><b style={{fontSize:"15pt"}}>30<sup>o</sup>C</b><br/>Berawan</div>

        <style jsx>{`
          .container {
            align-items: center;
            justify-content:center;
            display: grid;
            grid-template-columns: 100px 130px repeat(3, 90px);
          }
          .item1 {
            font-size: 60pt;
            color: #77E681;
          }
          .item2 {
            color: #555;
            justify-self:end;
          }
          .item3 {
            text-align:center;
            border-left:1px solid rgba(0,0,0,.3);
            justify-self:center;
            height:70px;
          }
          .item4 {
            color: #555;
          }
          .item5 {
            color: #555;
            margin: 22px 0 0 -18px;
          }
        `}</style>
      </div>
      </Media>
    );
  }
}

export default Weather;
