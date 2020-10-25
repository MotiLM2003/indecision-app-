'use strict';

console.log('App js is running 👍');

var isVisible = false;

var toggle = function toggle() {
  isVisible = !isVisible;
  console.log(isVisible);
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'p',
      null,
      isVisible ? 'Now you see me' : "Now you don't!"
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      isVisible ? 'Hide details' : 'Show details'
    )
  );

  ReactDOM.render(template, document.getElementById('root'));
};

render();
