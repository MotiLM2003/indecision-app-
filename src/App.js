class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: ['Thing One', 'Thing two', 'Thing three'] };

    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleRemoveAll() {
    this.setState(() => {
      return { options: [] };
    });
  }

  handleAddItem(item) {
    console.log(item);
    this.setState({ options: this.state.options.push(item) });
    console.log('working kinda');
  }

  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of computer';
    const { options } = this.state;
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action length={options.length === 0} />
        <Options options={options} handleRemoveAll={this.handleRemoveAll} />
        <AddOption handleAddItem={this.handleAddItem} />
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
  constructor(props) {
    super(props);
  }
  handlePick() {
    alert(' picking');
  }
  render() {
    const { length } = this.props;
    return (
      <div>
        <button disabled={length} onClick={this.handlePick}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options, handleRemoveAll } = this.props;
    console.log('in options, array: ', options);
    console.log(options);
    return (
      <div>
        <button onClick={() => handleRemoveAll()}>Remove All</button>
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
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
  }

  addOption(e) {
    e.preventDefault();
    this.props.handleAddItem();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
const jsx = (
  <div>
    <IndecisionApp />
  </div>
);
ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
