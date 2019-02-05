import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './MainPage';
import { AddPage } from './AddPage';

export class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            window: "main"
        };
        this.switchToAddPage = this.switchToAddPage.bind(this);
        this.switchToMainPage = this.switchToMainPage.bind(this);
    }

    switchToAddPage() {
        this.setState({window: "add"});
    }

    switchToMainPage() {
        this.setState({window: "main"});
    }

    render() {
        let returnJSX;
        
        if (this.state.window === "main") {
            returnJSX = (
                <MainPage onClick={this.switchToAddPage} />
            );
        } else if (this.state.window === "add") {
            returnJSX = (
                <AddPage onClick={this.switchToMainPage} />
            );
        }

        return returnJSX;
    }
}