import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getData(days) {
  var data = [];
  for (let i = 0; i < days; i++) {
    data.push(getRandomArbitrary(500, 5000));
  }
  return data;
}

const options = {
  chart: {
    zoomType: 'x',
    height: '250px',
    scrollablePlotArea: {
      minWidth: 700,
      scrollPositionX: 1,
    },
  },
  credits: {
    enabled: false,
  },
  colors: ['E54F6D'],
  title: {
    text: '',
  },
  xAxis: {
    // categories: [], // ['01', '02', '03', '04', '05', '06', '07', '08'],
    title: {
      text: '',
    },
    tickInterval: 1,
    gridLineWidth: 0,
    lineColor: 'transparent',
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
    gridLineWidth: 0,
  },
  plotOptions: {
    series: {
      color: '#E54F6D',
    },
    area: {
      lineWidth: 1,
    },
    marker: {
      enabled: false,
      color: '#E54F6D',
      lineWidth: 2,
      // radius: 2,
      states: {
        hover: {
          enabled: true,
          radius: 2,
        },
      },
    },
  },
  series: [
    {
      data: getData(60), // [2200, 3000, 1800, 3600, 4000, 3800, 3900, 2700],
      type: 'area',
      marker: {
        fillColor: '#FFFFFF',
        radius: 3,
        lineWidth: 1,
        lineColor: null, // inherit from series
      },
      showInLegend: false,
      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, '#f8d3da'],
          [1, 'white'],
        ],
      },
    },
  ],
};

const StockChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StockChart;
