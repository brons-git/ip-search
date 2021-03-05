import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '', inputValue: '', result: {} };
  }

  callAPI = async () => {
    try {
      const api_url = `http://localhost:9000/ipdata/${this.state.inputValue}`;
      const res = await fetch(api_url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const result = await res.json();
      this.setState({ result });
    } catch (error) {
      // handle errors - don't forget this part
    }
  };

  render() {
    const onEnter = (event, callback) => event.key === 'Enter' && callback();

    return (
      <div className="App">
        <h1>IP Search</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          onKeyPress={(e) => onEnter(e, this.callAPI)}
        />
        <button onClick={this.callAPI}>Search IP</button>
        <p>
          <span>{this.state.result.city}</span>
          <span>{this.state.result.region_code}</span>
          <span>{this.state.result.zip}</span>
        </p>
      </div>
    );
  }
}

export default App;
