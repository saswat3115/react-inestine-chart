import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    zoomType: 'x',
  },
  title: {
    text: 'My chart',
  },
  xAxis: {
    categories: ['a', 'b', 'c', 'd', 'e', 'f'],
    title: {
      text: 'Date',
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Investment',
    },
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
      data: [1, 2, 3, 2, 5, 1, 3, 4, 4, 3, 5, 6, 6, 7],
      type: 'area',
      marker: {
        fillColor: '#FFFFFF',
        radius: 4,
        lineWidth: 1,
        lineColor: null, // inherit from series
      },
      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          [0, '#E54F6D'],
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
