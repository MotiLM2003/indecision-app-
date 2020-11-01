import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],

    selectedOption: undefined,
  };

  clearSelectedOption = () => {
    this.setState({ selectedOption: undefined });
  };

  componentDidMount = () => {
    this.loadOptions();
  };

  loadOptions = () => {
    const loadedOptions = [];
    if (localStorage.getItem('options') !== null) {
      const arr = JSON.parse(localStorage.getItem('options'));
      this.setState(() => ({ options: arr }));
    }
  };

  saveOptions = () => {
    localStorage.setItem('options', JSON.stringify(this.state.options));
  };

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

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      selectedOption: this.state.options[index],
    });
  };

  handleAddItem = (item) => {
    if (!item) {
      return 'Option must have value.';
    }
    if (this.state.options.indexOf(item) !== -1) {
      return 'option already exists';
    }
    this.setState((prev) => ({
      options: prev.options.concat([item]),
    }));
  };

  removeItem = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((x) => x !== option),
    }));
  };

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
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
