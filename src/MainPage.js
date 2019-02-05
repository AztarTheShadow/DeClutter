import React from 'react';
import ReactDOM from 'react-dom';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}>
                MainPage
            </button>
        );
    }
}