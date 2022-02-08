import React, { Component, useMemo } from 'react';

const H = 36;
const W = 36;

const getArcPath = (x, y, rx, ry, d) => {
  return `M${x} ${y} a ${rx} ${ry} 0 0 1 0 ${d} a ${rx} ${ry} 0 0 1 0 -${d}`;
};

const Intestine = (props) => {
  const { width, borderWidth, gap, data } = props;
  const start = {
    x: 18,
    y: 2.0845,
  };
  return (
    <svg viewBox={`0 0 ${H} ${W}`} className="circular-chart">
      {Object.keys(data).map((item, index) => {
        let fillPercentage = (data[item].actual / data[item].estimated) * 100;

        let maxArcPercentage = (data[item].maxAngle / 360) * 100;
        let fillArcPercentage = (maxArcPercentage * fillPercentage) / 100;

        return (
          <g key={item}>
            <path
              className="circle-bg"
              strokeLinecap="round"
              // d="M18 2.0845
              // a 15.9155 15.9155 0 0 1 0 31.831
              // a 15.9155 15.9155 0 0 1 0 -31.831"
              d={getArcPath(
                start.x,
                start.y + index * 4,
                15.9155 - index * 4,
                15.9155 - index * 4,
                (15.9155 - index * 4) * 2
              )}
              fill="none"
              strokeDasharray={`${maxArcPercentage} 100`}
              strokeWidth={width}
              stroke="red"
            />
            <path
              className="circle-white"
              strokeLinecap="round"
              // d="M18 2.0845
              // a 15.9155 15.9155 0 0 1 0 31.831
              // a 15.9155 15.9155 0 0 1 0 -31.831"
              d={getArcPath(
                start.x,
                start.y + index * 4,
                15.9155 - index * 4,
                15.9155 - index * 4,
                (15.9155 - index * 4) * 2
              )}
              fill="none"
              strokeDasharray={`${maxArcPercentage} 100`}
              strokeWidth={width - borderWidth}
              stroke="white"
            />
            <path
              className="circle"
              strokeLinecap="round"
              // d="M18 2.0845
              // a 15.9155 15.9155 0 0 1 0 31.831
              // a 15.9155 15.9155 0 0 1 0 -31.831"
              d={getArcPath(
                start.x,
                start.y + index * 4,
                15.9155 - index * 4,
                15.9155 - index * 4,
                (15.9155 - index * 4) * 2
              )}
              fill="none"
              strokeDasharray={`${fillArcPercentage} 100`}
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
