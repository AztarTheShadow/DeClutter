import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './MainPage';

export class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            window: "main"
        };
        this.switchToAddLinkPage = this.switchToAddLinkPage.bind(this);
        this.switchToMainPage = this.switchToMainPage.bind(this);
    }

    switchToAddLinkPage() {
        this.setState({window: "addLink"});
    }

    switchToMainPage() {
        this.setState({window: "main"});
    }

    render() {
        let innerJSX;
        
        if (this.state.window === "main") {
            innerJSX = (
                <MainPage />
            );
        } 

        return (
            <div className="mainWindow">
                {innerJSX}
            </div>
        );
    }
}