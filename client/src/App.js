import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'
import Title from './Title'
import testData from './testData'

class App extends Component {
  constructor(props) {
    super(props)

    this.state =  {
      user: {

      }
    }
  }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(user => this.setState({ user }))
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.user.username}
        </p>
        <Title data={testData} />
        <SearchBar />
      </div>
    );
  }
}

export default App;
