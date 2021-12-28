import React, { Component } from 'react';
import MessageBoard from './MessageBoard';
import PublishMessage from './PublishMessage';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Reaction</h2>
        <hr />
        <PublishMessage />
        <hr />
        <MessageBoard />
      </div>
    );
  }
}

export default App;
