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
        return (
          <g key={item}>
            <path className="circle-bg" />
            <path className="circle-white" />
            <path className="circle" />
          </g>
        );
      })}
    </svg>
  );
};
