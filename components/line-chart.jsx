import React, { Component } from "react";
import Chart from "chart.js"

class LineChart extends Component {
  componentDidMount() {
    let element = document.getElementById('lineChart').getContext('2d');
    var line = new Chart(element, {
      type: "line",
      data: {
        datasets: [{
            data: [10, 20, 30],
            fill: false,
            borderColor: '#77E681'
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            '29 Jul',
            '30 Jul',
            '31 Jul'
        ]
    },
      options: {
          legend: {
              display: false
          },
          scales : {
              yAxes:[{
                  gridLines: {
                    display: false,
                  }
              }],
              xAxes: [{
                  gridLines: {
                      display: false
                  }
              }]
          }
      }
    });
  }

  render() {
    return (
      <div id={this.props.id} className="line-chart">
        <canvas id="lineChart"></canvas>

        <style jsx>{`
            .line-chart {
                width: 100%;
                justify-self: center;
                align-self:center;
            }
        `}</style>
      </div>
    );
  }
}

export default LineChart;
