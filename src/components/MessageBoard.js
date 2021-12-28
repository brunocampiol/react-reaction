import React from 'react';
import { connect } from 'react-redux';

const MessageBoard = ({messages}) => {
    return (
        <div>
        <h3>MESSAGE BOARD</h3>
        {
            messages.items.map(message => {
                const {id, text, timestamp} = message;
                return (
                         <div key={id}>
                             <h4>{new Date(timestamp).toLocaleString()}</h4>
                             <p>{text}</p>
                             <hr />
                         </div>
                )})
        }
        </div>
)}

export default connect(({messages}) => ({messages}))(MessageBoard);