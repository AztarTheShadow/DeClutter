import React from 'react';
import ReactDOM from 'react-dom';
import { LinkInput } from './LinkInput';

export class AddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: 1
        };
        this.addChild = this.addChild.bind(this);
        this.submit = this.submit.bind(this);
    }

    addChild() {
        const newNo = this.state.links + 1;
        if (newNo <= 10) {
            this.setState((state, props) => {
                return {
                    links: newNo
                };
            });
        }
    }

    submit() {
        this.props.onClick();
    }

    render() {
        let linkInputs = [];
        for (let i = 0; i < this.state.links; i++) {
            linkInputs.push(<LinkInput />);
        }

        return (
            <form className="container" onSubmit={this.submit}>
                <div className="add-title">
                    <label>Group Name:</label>
                    <input />
                </div>
                <div className="add-contents">
                    {linkInputs}
                </div>
                <div className="add-footer">
                    <button type="button" onClick={this.addChild}>
                        Add
                    </button>
                    <button type="submit">
                        Submit
                    </button>
                    <button type="button" onClick={this.props.onClick}>
                        Back
                    </button>
                </div>
            </form>
        );
    }
}