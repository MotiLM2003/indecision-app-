


console.log('App js is running 👍');

let isVisible = false;

const toggle = () => {
  isVisible = !isVisible;
  console.log(isVisible);
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <p>{isVisible ? 'Now you see me' : "Now you don't!"}</p>
      <button onClick={toggle}>
        {isVisible ? 'Hide details' : 'Show details'}
      </button>
    </div>
  );

  ReactDOM.render(template, document.getElementById('root'));
};

render();
