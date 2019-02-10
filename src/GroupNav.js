/* global chrome */
import React from 'react';
import { getGroups } from './dataStorage';
import { DH_CHECK_P_NOT_PRIME } from 'constants';

export class GroupNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
        this.setGroups = this.setGroups.bind(this);

        let tempSetGroups = this.setGroups;

        getGroups(this.setGroups);
        chrome.storage.onChanged.addListener(function (changes, namespace) {
            getGroups(tempSetGroups);
            console.log("we made it");
        });
    }

    setGroups(groups) {
        this.setState({groups: groups});
    }

    render() {
        let buttons = [];
        this.state.groups.sort().forEach((group) => {
            buttons.push(<button onClick={() => this.props.onClick(group)}>{group}</button>);
        });

        return (
            <div className="group-nav">
                {buttons}
            </div>
        );
    }
}