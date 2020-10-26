class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of computer';
    const options = ['Thing One', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div>
        <h1>{title} </h1>
        <h2>{subTitle}</h2>
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
    const { options } = this.props;
    return (
      <div>
        {options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { option } = this.props;
    return <div>{option}</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component</div>;
  }
}
const jsx = (
  <div>
    <IndecisionApp />
  </div>
);
ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
