import React from 'react';
import ReactDOM from 'react-dom';

export class AddPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}>
                AddPage
            </button>
        );
    }
}