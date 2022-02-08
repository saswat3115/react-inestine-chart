import React, { Component, useMemo } from 'react';

const H = 36;
const W = 36;

const Intestine = (props) => {
  const { width, borderWidth, gap, data } = props;
  const start = {
    x: W / 2,
    y: H / Math.PI / 2,
  };
  return (
    <svg viewBox={`0 0 ${H} ${W}`} className="circular-chart">
      {Object.keys(data).map((item) => {
        const fillPercentage = (data[item].actual / data[item].estimated) * 100;
        return (
          <g key={item}>
            <path
              className="circle-bg"
              strokeLinecap="round"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray={`75 100`}
              strokeWidth={width}
              stroke="red"
            />
            <path
              className="circle-white"
              strokeLinecap="round"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray={`75 100`}
              strokeWidth={width - borderWidth}
              stroke="white"
            />
            <path
              className="circle"
              strokeLinecap="round"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray={`${fillPercentage} 100`}
              strokeWidth={width - borderWidth}
              stroke="yellow"
            />
          </g>
        );
      })}
    </svg>
  );
};

export default Intestine;
