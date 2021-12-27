import React, { Component } from 'react';
import { PubSubContext } from '../pubnub';
import { newMessage } from '../actions/messages';
//import PubSub from '../pubnub';

//const pubsub = new PubSub();

class PublishMessage extends Component {

    state = { text: '' };
    
    updateText = event => this.setState({text: event.target.value});

    publishMessasge = () => {
        this.context.pubsub.publish(newMessage(this.state.text));
        //pubsub.publish(newMessage(this.state.text));
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') this.publishMessasge();
    }

    render() {
        //console.log('this', this);
        return(
            <div>
                <h3>Got something to say?</h3>
                <input onChange={this.updateText} onKeyUp={this.handleKeyPress} />
                {' '}
                <button onClick={this.publishMessasge}>Publish!</button>
            </div>
        )
    }

    static contextType = PubSubContext;
}

export default PublishMessage;