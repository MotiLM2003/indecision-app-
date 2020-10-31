class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      name: 'moti',
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.saveOptions = this.saveCounter.bind(this);
  }

  handleIncrease() {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });

    console.log(this.state);
  }

  componentDidMount() {
    console.log('mount');
    this.loadCounter();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter != this.state.counter) {
      this.saveCounter();
    }
  }
  loadCounter() {
    if (localStorage.getItem('counter')) {
      const counter = parseInt(localStorage.getItem('counter'), 10);
      this.setState(() => ({ counter }));
    }
  }

  saveCounter() {
    localStorage.setItem('counter', this.state.counter);
  }

  handleDecrease() {
    this.setState((prev) => {
      console.log(prev);
      return { counter: prev.counter - 1 };
    });
  }

  handleReset() {
    // this.setState({ counter: 0 });
    // this.setState({ counter: this.state.counter + 1 });

    this.setState(() => {
      return { counter: 0 };
    });

    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>
          Counter : {this.state.counter}
          <p>Helllo</p>
        </h1>
        <h2>{this.state.name}</h2>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <button onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));

// let count = 0;
// const addOne = () => {
//   count++;
//   console.log('AddOne', count);

//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   console.log('minusOne', count);
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   console.log('Reset', count);
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count} tri la la</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, document.getElementById('root'));
// };

// renderCounterApp();
