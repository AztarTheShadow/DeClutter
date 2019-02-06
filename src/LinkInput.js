import React from 'react';
import ReactDOM from 'react-dom';

export class LinkInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="link-input">
                <label>Name:</label>
                <input></input>
                <label>Link:</label>
                <input></input>
                <button type="button">-</button>
            </div>
        );
    }
}