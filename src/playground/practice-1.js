let count = 0;
const addOne = () => {
  count++;
  console.log('AddOne', count);

  renderCounterApp();
};
const minusOne = () => {
  count--;
  console.log('minusOne', count);
  renderCounterApp();
};
const reset = () => {
  count = 0;
  console.log('Reset', count);
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count} tri la la</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, document.getElementById('root'));
};
