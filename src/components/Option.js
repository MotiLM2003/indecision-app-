import React from 'react';

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

export default Option;
