import React, { Component } from 'react';
import PubSub from '../pubnub';
import { newMessage } from '../actions/messages'

const pubsub = new PubSub();

class PublishMessage extends Component {

    state = { text: '' };
    
    updateText = event => this.setState({text: event.target.value});

    publishMessasge = () => {
        pubsub.publish(newMessage(this.state.text));
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') this.publishMessasge();
    }

    // Should it have the onKeyRelease/Up?
    render() {
        return(
            <div>
                <h3>Got something to say?</h3>
                <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />
                {' '}
                <button onClick={this.publishMessasge}>Publish!</button>
            </div>
        )
    }
}

export default PublishMessage;