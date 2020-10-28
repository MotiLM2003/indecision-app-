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

    _this.state = { options: [] };

    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddItem = _this.handleAddItem.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
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
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subTitle = 'Put your life in the hands of computer';
      var options = this.state.options;

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Action, { length: options.length === 0, handlePick: this.handlePick }),
        React.createElement(Options, { options: options, handleRemoveAll: this.handleRemoveAll }),
        React.createElement(AddOption, { handleAddItem: this.handleAddItem })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subTitle = _props.subTitle;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          title,
          ' '
        ),
        React.createElement(
          'h2',
          null,
          subTitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      var length = this.props.length;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { disabled: length, onClick: this.props.handlePick },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          options = _props2.options,
          handleRemoveAll = _props2.handleRemoveAll;

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
          return React.createElement(Option, { key: index, option: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      var option = this.props.option;

      return React.createElement(
        'div',
        null,
        option
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.addOption = _this6.addOption.bind(_this6);

    _this6.state = { error: undefined };
    return _this6;
  }

  _createClass(AddOption, [{
    key: 'addOption',
    value: function addOption(e) {
      e.preventDefault();
      var item = e.target.elements.option.value.trim();
      var error = this.props.handleAddItem(item);
      console.log(error);
      if (error) {
        this.setState(function () {
          return { error: error };
        });
      } else {
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
        console.log(this.state.error === true) ? 'true' : 'false',
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

var jsx = React.createElement(
  'div',
  null,
  React.createElement(IndecisionApp, null)
);
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('root'));
