import React, { Component } from "react";
import Chart from "chart.js";

class PieChart extends Component {
  componentDidMount() {
    let element = document.getElementById("pieChart").getContext("2d");
    var pie = new Chart(element, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 30],
            backgroundColor: ["#B9F75E", "#77E681"]
          }
        ]
      },
      options: {
        cutoutPercentage: 85
      }
    });
  }

  render() {
    return (
      <div id={this.props.id} className="pie-chart">
        <canvas id="pieChart" />
        <div className="label">
          <span className="panen"> Hi there </span>
          <br />
          <span className="total"> Hi there </span>
        </div>

        <style jsx>{`
          #pieChart {
            min-width: 100px;
            max-width: 550px;
          }
          .pie-chart {
            justify-self: start;
          }
          span {
            display: block;
          }
          .label {
            margin: -165px 0 0 450px;
          }
          .panen,
          .total {
            font-size: 10pt;
            color: white;
            font-weight: bold;
            background: #B9F75E;
            padding: 5px 120px 5px 20px;
            border-radius: 50px;
          }
          .total {
            background: #77E681;
          }
        `}</style>
      </div>
    );
  }
}

export default PieChart;
