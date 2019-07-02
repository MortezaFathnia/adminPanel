import React, { Component } from 'react';
import ApexCharts from 'apexcharts';
class Chart extends Component {
  constructor(props) {
    super(props);
    this.intialConfig(props);
    this.chart = '';
  }
  intialConfig = props => {
    switch (props.type) {
      case 'bar':
        this.state = {
          options: {
            chart: {
              type: props.type
            },
            series: [
              {
                name: props.name,
                data: props.data
              }
            ],
            xaxis: {
              categories: props.categories
              /*   labels: {
                formatter: function(value) {
                  let res = '';
                  if (Object.toString(value).length > 25) {
                    res = value.slice(0, 25) + '***';
                    console.log(res);
                    return res;
                  }   else {
                    return value;
                  } 
                }
              } */
            }
          }
        };
        break;
      case 'pie' || 'donut':
        console.log(props.type);
        this.state = {
          options: {
            chart: {
              type: props.type
            },
            series: props.data,
            labels: props.categories
          }
        };
        break;
    }
  };
  chartRender = () => {
    this.intialConfig(this.props);
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new ApexCharts(
      document.querySelector('#chart'),
      this.state.options
    );

    this.chart.render();
  };
  componentDidMount() {
    this.chartRender(this);
  }
  render() {
    return <div id="chart" />;
  }
}
export default Chart;
