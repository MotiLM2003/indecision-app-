import React from 'react';
import Option from './Option';
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

export default Options;
