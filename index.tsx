import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Chart from './Chart';

const data = {
  EXPENSE: {
    estimated: 15000,
    actual: 1000,
    color: '#FF4259',
  },
  INCOME: {
    estimated: 150000,
    actual: 150000,
    color: '#009C5B',
  },
  SAVING: {
    estimated: 100000,
    actual: 80000,
    color: '#F8C630',
  },
  INVEST: {
    estimated: 25000,
    actual: 22000,
    color: '#45A6FF',
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
        <Chart
          data={data}
          radius={200}
          active=""
          width={24}
          borderWidth={4}
          gap={35}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
