class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };

    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleRemoveAll() {
    this.setState(() => {
      return { options: [] };
    });
  }

  handlePick() {
    const index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  }

  handleAddItem(item) {
    if (!item) {
      return 'Option must have value.';
    }
    if (this.state.options.indexOf(item) !== -1) {
      return 'option already exists';
    }
    this.setState((prev) => {
      return {
        options: prev.options.concat([item]),
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of computer';
    const { options } = this.state;
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action length={options.length === 0} handlePick={this.handlePick} />
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

  render() {
    const { length } = this.props;
    return (
      <div>
        <button disabled={length} onClick={this.props.handlePick}>
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

    this.state = { error: undefined };
  }

  addOption(e) {
    e.preventDefault();
    const item = e.target.elements.option.value.trim();
    const error = this.props.handleAddItem(item);
    console.log(error);
    if (error) {
      this.setState(() => {
        return { error };
      });
    } else {
      e.target.elements.option.value = '';
    }
  }
  render() {
    const { error } = this.state;
    return (
      <div>
        {console.log(this.state.error === true) ? 'true' : 'false'}
        {this.state.error && <p>{error}</p>}
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
