import React from 'react';
import Option from './Option';
const Options = (props) => {
  const { options, handleRemoveAll, removeItem } = props;
  return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-header__title'>Your Options</h3>
        <button
          onClick={() => handleRemoveAll()}
          className='button button--link'
        >
          Remove All
        </button>
      </div>

      {props.options.length === 0 && (
        <p className='widget__message'>Please add an option to get started!</p>
      )}
      {options.map((option, index) => (
        <Option
          key={index}
          option={option}
          removeItem={removeItem}
          count={index + 1}
        />
      ))}
    </div>
  );
};

export default Options;
