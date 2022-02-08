import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Chart from './Chart';
import StockChart from './StockChart';
import Intestine from './Intestine';

const data = {
  EXPENSE: {
    estimated: 15000,
    actual: 10000,
    color: '#FF4259',
    maxAngle: 270,
  },
  INCOME: {
    estimated: 150000,
    actual: 150000,
    color: '#009C5B',
    maxAngle: 180,
  },
  SAVING: {
    estimated: 100000,
    actual: 80000,
    color: '#F8C630',
    maxAngle: 120,
  },
  INVEST: {
    estimated: 25000,
    actual: 22000,
    color: '#45A6FF',
    maxAngle: 90,
  },
};

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        {/* <Chart
          data={data}
          radius={200}
          active=""
          width={24}
          borderWidth={4}
          gap={35}
        /> */}
        {/* <StockChart /> */}
        <Intestine data={data} width={3} borderWidth={1} gap={2} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
