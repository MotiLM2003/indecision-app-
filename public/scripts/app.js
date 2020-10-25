'use strict';

console.log('App js is running 👍');

var app = {
  title: 'Title',
  subTitle: 'sub title',
  options: ['One', 'Two', 'Three', 'Four']
};

var isTitleExists = function isTitleExists() {
  return app.title;
};

var template = React.createElement(
  'div',
  null,
  app.title && React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    'app.subTitle'
  ),
  app.options && app.options.length > 0 && React.createElement(
    'p',
    null,
    'here are your options'
  ),
  React.createElement(
    'ol',
    null,
    app.options.map(function (option, index) {
      return React.createElement(
        'li',
        { key: index },
        option
      );
    })
  )
);

var count = 0;
var addOne = function addOne() {
  return console.log('AddOne');
};
var minusOne = function minusOne() {
  return console.log('minusOne');
};
var reset = function reset() {
  return console.log('Reset');
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

ReactDOM.render(templateTwo, document.getElementById('root'));
