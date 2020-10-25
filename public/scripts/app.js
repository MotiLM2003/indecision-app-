'use strict';

console.log('App js is running 👍');
console.log(react);

var template = React.createElement(
  'p',
  null,
  'this1 is 1JSX from app.js'
);
reactDOM.render(template, document.getElementById('root'));
