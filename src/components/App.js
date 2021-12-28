import React, { Component } from 'react';
import MessageBoard from './MessageBoard';
import PublishMessage from './PublishMessage';
import SetUsername from './SetUsername';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Reaction</h2>
        <SetUsername />
        <hr />
        <PublishMessage />
        <hr />
        <MessageBoard />
      </div>
    );
  }
}

export default App;
