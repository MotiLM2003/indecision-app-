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
        {this.state.error && <p className='add-option-error'>{error}</p>}
        <form onSubmit={this.addOption} className='add-option'>
          <input type='text' name='option' className='add-option__input' />
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
