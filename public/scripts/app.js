'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      counter: 0,
      name: 'moti'
    };

    _this.handleIncrease = _this.handleIncrease.bind(_this);
    _this.handleDecrease = _this.handleDecrease.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleIncrease',
    value: function handleIncrease() {
      this.setState(function (prev) {
        return { counter: prev.counter + 1 };
      });

      console.log(this.state);
    }
  }, {
    key: 'handleDecrease',
    value: function handleDecrease() {
      this.setState(function (prev) {
        console.log(prev);
        return { counter: prev.counter - 1 };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      // this.setState({ counter: 0 });
      // this.setState({ counter: this.state.counter + 1 });

      this.setState(function () {
        return { counter: 0 };
      });

      this.setState(function (prev) {
        return { counter: prev.counter + 1 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Counter : ',
          this.state.counter
        ),
        React.createElement(
          'h2',
          null,
          this.state.name
        ),
        React.createElement(
          'button',
          { onClick: this.handleIncrease },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleDecrease },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.handleReset();
            } },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('root'));

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
