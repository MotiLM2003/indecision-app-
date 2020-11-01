import React from 'react';

const Option = (props) => {
  const { option, removeItem, count } = props;
  return (
    <div className='option'>
      <p className='option__text'>
        {count}. {option}
      </p>
      <button
        className='button button--link'
        onClick={() => {
          removeItem(option);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
