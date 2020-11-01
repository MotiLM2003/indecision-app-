import React from 'react';

const Action = (props) => {
  const { length } = props;
  return (
    <div>
      <button
        className='big-button'
        disabled={length}
        onClick={props.handlePick}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
