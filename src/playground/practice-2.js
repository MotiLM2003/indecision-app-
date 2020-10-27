class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    console.log('here 👍');

    this.state = { isVisible: false };

    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility() {
    this.setState((prev) => {
      console.log();
      return { isVisible: !prev.isVisible };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.isVisible ? 'Hide details' : 'Show details'}{' '}
        </button>

        {this.state.isVisible && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('root'));
