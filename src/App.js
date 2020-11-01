import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = () => {
  return (
    <div>
      <header>
        <h1> Header</h1>
      </header>
      <IndecisionApp />
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <IndecisionApp />
  </Layout>,
  document.getElementById('root')
);
