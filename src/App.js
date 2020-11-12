import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {counter : "0"};

  //A function to increment the counter every time a button is clicked
  incrementCounter = () => {
      this.setState({counter:parseInt(this.state.counter)+1});
  }
  //override the render method
  render() {
      return <div>
        <button onClick={this.incrementCounter}>Click Me!</button>
        <br/>
        <span style={{fontSize:25}}>
        {this.state.counter}
        </span>
        </div>
  }
}
export default App;
