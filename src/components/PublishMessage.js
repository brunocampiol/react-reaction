import React, { Component } from 'react';
import { PubSubContext } from '../pubnub';
import { connect } from 'react-redux';
import { newMessage } from '../actions/messages';

class PublishMessage extends Component {

    state = { text: '' };
    
    updateText = event => this.setState({text: event.target.value});

    publishMessasge = () => {
        const { text } = this.state;
        const { username } = this.props;
        this.context.pubsub.publish(newMessage({text, username}));
        //pubsub.publish(newMessage(this.state.text));
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') this.publishMessasge();
    }

    render() {
        return(
            <div>
                <h3>Send a message here:</h3>
                <input onChange={this.updateText} onKeyUp={this.handleKeyPress} />
                {' '}
                <button onClick={this.publishMessasge}>Publish!</button>
            </div>
        )
    }

    static contextType = PubSubContext;
}

export default connect(({username}) => ({username}))(PublishMessage);