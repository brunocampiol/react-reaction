import PubNub from "pubnub";
import { createContext } from 'react';
import pubnubConfig from "./pubnub.config";

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

class PubSub{
    constructor() {
        this.pubnub = new PubNub(pubnubConfig);
        this.pubnub.subscribe({channels: [MESSAGE_CHANNEL]});
    }

    addListener = listenerConfig => {
        this.pubnub.addListener(listenerConfig);
    }

    publish = message => {
        console.log('Publish message:', message);
        this.pubnub.publish({message, channel: MESSAGE_CHANNEL});
    }
}

//export const PubSubContext = createContext({ pubsub: new PubSub()});
export const PubSubContext = createContext();
export default PubSub;

// pubnub.addListener({
//     message: messageObject => {
//         console.log('messageObject', messageObject);
//     }
// })

// setTimeout(() => {
//     pubnub.publish({
//         message: 'foo',
//         channel: MESSAGE_CHANNEL
//     })
// }, 1000)