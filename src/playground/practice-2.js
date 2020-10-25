const app = {
  title: 'Title',
  subTitle: 'sub title',
  options: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'],
};

const isTitleExists = () => app.title;

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';

    render();
  } else {
    console.log('no content');
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const onMakeDescision = () => {
  const rnd = Math.floor(Math.random() * app.options.length);
  const option = app.options[rnd];
  console.log(option);
};

const render = () => {
  var template = (
    <div>
      {app.title && <h1>{app.title}</h1>}
      {app.subTitle && <p>{app.subTitle}</p>}
      {app.options && app.options.length > 0 && <p>here are your options</p>}
      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
      <button onClick={onMakeDescision} disabled={app.options.length === 0}>
        What should I do?
      </button>
      <button onClick={removeAll}> Remove All </button>

      <form action='' onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Button</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById('root'));
};

render();
