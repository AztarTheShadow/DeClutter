import React from 'react';
import { addLink } from './dataStorage';

export class AddLinkPage extends React.Component {
    constructor(props) {
        super(props);
        this.goHome = this.props.goHome;
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        this.goHome();
        const nameInput = event.target.children[0].children[1];
        const linkInput = event.target.children[0].children[3];
        console.log(`Name: ${nameInput.value} Link: ${linkInput.value}`);
        addLink(this.props.group, {
            name: nameInput.value,
            link: linkInput.value
        });
    }

    render() {
        return (
            <div className="group-contents">
                <div className="add-link-header">
                    <h2>Add link to {this.props.group}</h2>
                </div>
                <form className="add-link-form" onSubmit={this.submit}>
                    <div className="link-contents">
                        <label>Name:</label>
                        <input />
                        <label>Link:</label>
                        <input />
                    </div>
                    <div className="link-button-footer">
                        <button type="submit">Add</button>
                        <button type="button" onClick={this.goHome}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}