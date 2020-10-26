class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision </h1>
        <h2>Put your life in the hands of computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return <div>Option component</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component</div>;
  }
}
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);
ReactDOM.render(jsx, document.getElementById('root'));
