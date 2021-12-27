import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import PubSub from './pubnub';
import App from './components/App';
import { newMessage } from './actions/messages';
import './index.css';

const store = createStore(rootReducer);

//console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store.getState()', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject => {
        const {message, channel} = messageObject;
        console.log('Received Message:', message, 'channel:', channel);
        store.dispatch(message);
    }
})


setTimeout(() => {
    pubsub.publish(newMessage('Hello boes'));
}, 1000);

// Set timeout to avoid issues when we havent connected the listeners
// setTimeout(() => {
//     pubsub.publish({ type: 'foo', value: 'bar'});
// }, 1000);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root')
);