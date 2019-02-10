import React from 'react';
import ReactDOM from 'react-dom';
import { AddGroupHeader } from './AddGroupHeader';
import { GroupNav } from './GroupNav';
import { removeGroup, isMaxGroups } from './dataStorage';
import { AddLinkPage } from './AddLinkPage';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddingGroup: false,
            isAddingLink: false,
            activeGroup: ""
        };
        this.switchToAddGroupHeader = this.switchToAddGroupHeader.bind(this);
        this.switchFromAddGroupHeader = this.switchFromAddGroupHeader.bind(this);
        this.changeActiveGroup = this.changeActiveGroup.bind(this);
        this.removeActiveGroup = this.removeActiveGroup.bind(this);
        this.switchToAddLink = this.switchToAddLink.bind(this);
        this.switchFromAddLink = this.switchFromAddLink.bind(this);
    }

    switchToAddGroupHeader() {
        this.setState({isAddingGroup: true});
    }

    switchFromAddGroupHeader() {
        this.setState({isAddingGroup: false});
    }

    switchToAddLink() {
        this.setState({isAddingLink: true});
    }

    switchFromAddLink() {
        this.setState({isAddingLink: false});
    }

    changeActiveGroup(group) {
        this.setState({
            activeGroup: group,
            isAddingLink: false
        });
    }

    removeActiveGroup() {
        removeGroup(this.state.activeGroup);
        this.setState({activeGroup: ""});
    }

    render() {
        let mainHeader;
        if (this.state.isAddingGroup) {
            mainHeader = <AddGroupHeader goHome={this.switchFromAddGroupHeader}/>;
        } else {
            mainHeader = (
                <div className="main-header">
                    <h2>DeClutter</h2>
                    <button onClick={this.switchToAddGroupHeader}>
                        Add Group
                    </button>
                </div>
            );
        }

        let groupContents;
        if (this.state.isAddingLink) {
            groupContents = <AddLinkPage goHome={this.switchFromAddLink} group={this.state.activeGroup} />;
        } else {
            groupContents = (
                <div className="group-contents">
                    <div className="link-contents">
                        <p>{this.state.activeGroup}</p>
                    </div>
                    <div className="link-buttons">
                        <button onClick={this.switchToAddLink}>Add Link</button>
                        <button>Edit</button>
                        <button onClick={this.removeActiveGroup}>Remove</button>
                    </div>
                </div>
            );
        }

        return (
            <div className="container main-page">
                {mainHeader}
                <div className="main-contents">
                    <GroupNav onClick={this.changeActiveGroup} />
                    {groupContents}
                </div>
            </div>
        );
    }
}