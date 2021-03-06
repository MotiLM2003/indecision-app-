class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: this.props.arr };

    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
    this.saveOptions = this.saveOptions.bind(this);
  }

  componentDidMount() {
    this.loadOptions();
  }

  loadOptions() {
    const loadedOptions = [];
    if (localStorage.getItem('options') !== null) {
      const arr = JSON.parse(localStorage.getItem('options'));
      this.setState(() => ({ options: arr }));
    }
  }

  saveOptions() {
    localStorage.setItem('options', JSON.stringify(this.state.options));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (prevState.options.length != this.state.options.length) {
      console.log('saving');
      this.saveOptions();
    }
  }

  componentWillUnmount() {
    console.log('component unmount');
  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
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
    this.setState((prev) => ({
      options: prev.options.concat([item]),
    }));
  }

  removeItem(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((x) => x !== option),
    }));
  }

  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of computer';
    const { options } = this.state;
    return (
      <div>
        <Header />
        <Action length={options.length === 0} handlePick={this.handlePick} />
        <Options
          options={options}
          handleRemoveAll={this.handleRemoveAll}
          removeItem={this.removeItem}
        />
        <AddOption handleAddItem={this.handleAddItem} />
      </div>
    );
  }
}
const Header = (props) => {
  const { title, subTitle } = props;
  return (
    <div>
      <h1>{title} </h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  );
};

const Action = (props) => {
  const { length } = props;
  return (
    <div>
      <button disabled={length} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  const { options, handleRemoveAll, removeItem } = props;
  return (
    <div>
      <button onClick={() => handleRemoveAll()}>Remove All</button>
      {options.map((option, index) => (
        <Option key={index} option={option} removeItem={removeItem} />
      ))}
    </div>
  );
};

const Option = (props) => {
  const { option, removeItem } = props;
  return (
    <div>
      {option}
      <button
        onClick={() => {
          removeItem(option);
        }}
      >
        Remove
      </button>
    </div>
  );
};

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

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    const { error } = this.state;
    return (
      <div>
        {this.state.error && <p>{error}</p>}
        <form onSubmit={this.addOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
// }

// const User = (props) => {
//   return <p>{props.title}</p>;
// };

ReactDOM.render(<IndecisionApp arr={[]} />, document.getElementById('root'));
