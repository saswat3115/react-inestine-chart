import React, { Component, useMemo } from 'react';

type Props = {
  data: Array<{ estimated: number; actual: number; color: string }>;
  active: string;
  radius: number;
  width: number;
  borderWidth: number;
  gap: number;
};

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  var d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ');

  return d;
}

const Chart = ({ active, data, radius, borderWidth, gap, width }: Props) => {
  return (
    <div className="chart">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Object.keys(data).map((item, index) => {
          let r = radius - index * gap;
          let actualInPercentCartisian =
            (data[item].actual / data[item].estimated) * 270;
          let center = 500 / 2;
          const isActive = active !== '' && active !== item;
          return (
            <React.Fragment key={item}>
              {(active === '' || active === item) && (
                <React.Fragment>
                  <rect
                    width="61"
                    height="24"
                    rx="12"
                    y={center - r - 10}
                    x={center - 100}
                    fill={data[item].color}
                    fill-opacity="0.5"
                  />
                  <text x={center - 85} y={center - r + 7} fill="white">
                    5000
                  </text>
                  <text x={center - radius} y={center - r + 7} fill="black">
                    {item.substring(0, 3)}
                  </text>
                </React.Fragment>
              )}
              <path
                fill="none"
                d={describeArc(center, center, r, 0, 270)}
                strokeLinecap="round"
                stroke={!isActive ? data[item].color : '#45A6FF'}
                strokeWidth={width}
                strokeOpacity={isActive ? 0.1 : 1}
              />
              <path
                fill="none"
                d={describeArc(center, center, r, 0, 270)}
                strokeLinecap="round"
                stroke="#FFFFFF"
                strokeWidth={width - borderWidth}
                strokeOpacity={isActive ? 0.1 : 1}
              />
              <path
                fill="none"
                className="svg-path"
                d={describeArc(center, center, r, 0, actualInPercentCartisian)}
                strokeLinecap="round"
                stroke={!isActive ? data[item].color : '#45A6FF'}
                strokeOpacity={isActive ? 0.1 : 0.5}
                strokeWidth={width - borderWidth}
              />
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
};

export default Chart;
