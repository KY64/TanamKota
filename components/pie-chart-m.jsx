import React, { Component } from "react";
import Chart from "chart.js";

class PieChart extends Component {

  randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  addData(chart) {
    chart.data.datasets[0].data[0] = this.randNum(0,10)
    chart.update();
    console.log("yay")
  }
  
  componentDidMount() {
    let element = document.getElementById("pieChart");
    var pie = new Chart(element, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 10],
            backgroundColor: ["#B9F75E", "#ddd"]
          }
        ]
      },
      options: {
        cutoutPercentage: 85
      }
    });

    let element2 = document.getElementById("pieChart2");
    var pie2 = new Chart(element2, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 10],
            backgroundColor: ["#B9F75E", "#ddd"]
          }
        ]
      },
      options: {
        cutoutPercentage: 85
      }
    });
    let element3 = document.getElementById("pieChart3");
    var pie3 = new Chart(element3, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 10],
            backgroundColor: ["#B9F75E", "#ddd"]
          }
        ]
      },
      options: {
        cutoutPercentage: 85
      }
    });
    let element4 = document.getElementById("pieChart4");
    var pie4 = new Chart(element4, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 10],
            backgroundColor: ["#B9F75E", "#ddd"]
          }
        ]
      },
      options: {
        cutoutPercentage: 85
      }
    });

    this.addData(pie4)
  }

  render() {
    return (
      <div id={this.props.id} className="pie-chart" style={{color:"#0EBD1C"}}>
        <div id="level-air">
        <label>Level air</label>
          <p>9</p>
        </div>
        <div id="ph">
        <label>PH</label>
        <p>9</p>
        </div>
        <div id="suhu">
        <label>Suhu</label>
        <p>9</p>
        </div>
        <div id="ppm">
        <label>PPM</label>
        <p>9</p>
        </div>
        <canvas id="pieChart"/>
        <canvas id="pieChart2"/>
        <canvas id="pieChart3"/>
        <canvas id="pieChart4"/>

        <style jsx>{`
          #pieChart, #pieChart3 {
            max-width: 290px;
            position: absolute;
            left: -50px;
            top: 30px;
          }
          #pieChart2, #pieChart4 {
            max-width: 290px;
            position: absolute;
            right: -50px;
            top: 30px;
          }
          #pieChart3, #pieChart4 {
            top: 220px;
          }

          #level-air {
            margin: 10px 0 0 60px;
          }

          #level-air > p {
            font-size: 33pt;
            margin-left: 20px;
          }

          #ph {
            margin: -167px 0 0 253px;            
          }

          #ph > p {
            font-size: 33pt;
          }

          #suhu {
            margin: 66px 0 0 73px;
          }

          #suhu > p {
            font-size: 33pt;
            margin-left: 8px;
          }

          #ppm {
            margin: -170px 0 0 247px;
          }

          #ppm > p {
            font-size: 33pt;
            margin-left: 6px;
          }

          .pie-chart {
            position: relative;
          }
        `}</style>
      </div>
    );
  }
}

export default PieChart;
