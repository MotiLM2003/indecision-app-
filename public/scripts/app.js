'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = { options: _this.props.arr };

    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddItem = _this.handleAddItem.bind(_this);
    _this.removeItem = _this.removeItem.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('mount');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      console.log(prevState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('component unmount');
    }
  }, {
    key: 'handleRemoveAll',
    value: function handleRemoveAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var index = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[index]);
    }
  }, {
    key: 'handleAddItem',
    value: function handleAddItem(item) {
      if (!item) {
        return 'Option must have value.';
      }
      if (this.state.options.indexOf(item) !== -1) {
        return 'option already exists';
      }
      this.setState(function (prev) {
        return {
          options: prev.options.concat([item])
        };
      });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (x) {
            return x !== option;
          })
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subTitle = 'Put your life in the hands of computer';
      var options = this.state.options;

      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Action, { length: options.length === 0, handlePick: this.handlePick }),
        React.createElement(Options, {
          options: options,
          handleRemoveAll: this.handleRemoveAll,
          removeItem: this.removeItem
        }),
        React.createElement(AddOption, { handleAddItem: this.handleAddItem })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  var title = props.title,
      subTitle = props.subTitle;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      title,
      ' '
    ),
    subTitle && React.createElement(
      'h2',
      null,
      subTitle
    )
  );
};

Header.defaultProps = {
  title: 'Hello',
  subTitle: 'world'
};

IndecisionApp.defaultProps = {
  arr: ['moti 1', 'Moti 2', 'Moti 3']
};

var Action = function Action(props) {
  var length = props.length;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { disabled: length, onClick: props.handlePick },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  var options = props.options,
      handleRemoveAll = props.handleRemoveAll,
      removeItem = props.removeItem;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: function onClick() {
          return handleRemoveAll();
        } },
      'Remove All'
    ),
    options.map(function (option, index) {
      return React.createElement(Option, { key: index, option: option, removeItem: removeItem });
    })
  );
};

var Option = function Option(props) {
  var option = props.option,
      removeItem = props.removeItem;

  return React.createElement(
    'div',
    null,
    option,
    React.createElement(
      'button',
      {
        onClick: function onClick() {
          removeItem(option);
        }
      },
      'Remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.addOption = _this2.addOption.bind(_this2);

    _this2.state = { error: undefined };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'addOption',
    value: function addOption(e) {
      e.preventDefault();
      var item = e.target.elements.option.value.trim();
      var error = this.props.handleAddItem(item);

      if (error) {
        this.setState(function () {
          return { error: error };
        });
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var error = this.state.error;

      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          error
        ),
        React.createElement(
          'form',
          { onSubmit: this.addOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);
// }

// const User = (props) => {
//   return <p>{props.title}</p>;
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('root'));
