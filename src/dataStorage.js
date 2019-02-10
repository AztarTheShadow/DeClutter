/* global chrome */

export function addGroup(groupName) {
    // const emptyArray = [];

    let dataObj = {};
    dataObj[groupName] = {
        links: []
    };
    chrome.storage.sync.set(dataObj); 
    chrome.storage.sync.get([groupName], (result) => {
        console.log(result);
    });
}

export async function getGroups(callback) {
    chrome.storage.sync.get(null, (results) => {
        callback(Object.keys(results));
    });
}

export function removeGroup(group) {
    chrome.storage.sync.remove(group);
}

export function addLink(group, linkObj) {
    chrome.storage.sync.get(group, (results) => {
        results[group].links.push(linkObj);
        chrome.storage.sync.set(results);
    });
}

// export async function isMaxGroups() {
//     let isMax;
//     await chrome.storage.sync.get((results) => {
//         const keys = Object.keys(results);
//         if (keys.length === 10) {
//             isMax = true;
//         } else {
//             isMax = false;
//         }
//     });
//     return isMax;
// }
