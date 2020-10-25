console.log('App js is running 👍');

const app = {
  title: 'Title',
  subTitle: 'sub title',
  options: ['One', 'Two', 'Three', 'Four'],
};

const isTitleExists = () => app.title;

var template = (
  <div>
    {app.title && <h1>{app.title}</h1>}
    {app.subTitle && <p>app.subTitle</p>}
    {app.options && app.options.length > 0 && <p>here are your options</p>}
    <ol>
      {app.options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ol>
  </div>
);

let count = 0;
const addOne = () =>  console.log('AddOne');
const minusOne = () =>  console.log('minusOne');
const reset = () =>  console.log('Reset');


const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button  onClick={addOne} >
      +1
    </button>
    <button  onClick={minusOne} >
      -1
    </button>
    <button  onClick={reset} >
       reset
    </button>
  </div>
);

ReactDOM.render(templateTwo, document.getElementById('root'));
