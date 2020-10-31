import React from 'react';

class AddOption extends React.Component {
  state = { error: undefined };
  addOption = (e) => {
    e.preventDefault();
    const item = e.target.elements.option.value.trim();
    const error = this.props.handleAddItem(item);

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = '';
    }
  };

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

export default AddOption;
