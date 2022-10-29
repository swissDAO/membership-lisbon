// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "./interfaces/IDispatcher.sol";

// Import this file to use console.log
import "hardhat/console.sol";


contract Dispatcher is IDispatcher, isOwnable {

    struct Member {
        address member;
        uint256 tokenId;
    }

    struct Event {
        string title;
        uint256 id;
        uint256 timestamp;
        address[] owners;
        Member[] attendees;
    }

    mapping(uint256 => Event) public idToEvents;
    mapping(uint256 => Member) public idToMember;

    constructor() {

    }

    function createEvent() public {
        owners.push(msg.sender);
        owners.push(owner());
    }

    function updateEventTitle(uint256 _EventId, string memory _newTitle) public {
        // require owner calls this function
        // what should be the purpose of this function? update owner?
        // Event storage swissDAOEvent = idToEvents[_EventId];
        Event memory swissDAOEventCopy = idToEvents[_EventId];
        Event swissDAOEvent = Event(
                                        swissDAOEventCopy.attendees,
                                        swissDAOEventCopy.id,
                                        swissDAOEventCopy.owners,
                                        _newTitle
                                    );
        idToEvents[_EventId] = swissDAOEvent;
    }

    function updateAttendeesOfEvent(uint256 _eventID, address _attendee) public {

    }

    function updateMembercardFields() public {
        
    }

    function createMember() public {
        
    }
}
