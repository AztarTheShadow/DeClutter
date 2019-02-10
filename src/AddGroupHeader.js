import React from 'react';
import { addGroup } from './dataStorage';

export class AddGroupHeader extends React.Component {
    constructor(props) {
        super(props);
        this.goHome = this.props.goHome;
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        this.goHome();
        const input = event.target.children[1];
        console.log(input.value);
        addGroup(input.value);
    }

    render() {
        return (
            <form className="main-header" onSubmit={this.submit}>
                <label>Name:</label>
                <input name="groupName" required />
                <div className="main-header-buttons">
                    <button type="submit">Add</button>
                    <button type="button" onClick={this.goHome}>Cancel</button>
                </div>
            </form>
        );
    }
}