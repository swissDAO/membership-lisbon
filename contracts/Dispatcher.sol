// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "./interfaces/IDispatcher.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


// Import this file to use console.log
import "hardhat/console.sol";


contract Dispatcher is IDispatcher, Ownable {

    struct Member {
        address member;
        uint256 tokenId;
    }

    struct Event {
        string title;
        uint256 id;
        uint256 timestampOfEvent;
        address owner;
        Member[] attendees;
    }

    uint256 eventCount;

    mapping(uint256 => Event) public idToEvents;
    mapping(uint256 => Member) public idToMember;

    constructor() {

    }

    function createEvent(string memory _title, uint256 _timestampOfEvent) public {
        eventCount++;

        Member[] memory emptyAttendees;

        Event memory swissDAOEvent = Event({
                                        title: _title,
                                        id: eventCount,
                                        timestampOfEvent: _timestampOfEvent,
                                        owner: msg.sender,
                                        attendees: emptyAttendees
        });

        idToEvents[eventCount] = swissDAOEvent;
    }

    function updateEvent(
        uint256 _EventId,
        string memory _newTitle,
        uint256 _timestampOFEvent
        ) public {
        // require owner calls this function
        
        Event memory swissDAOEventCopy = idToEvents[_EventId];

        require(msg.sender == swissDAOEventCopy.owner, "You are not the owner of this event");
        

        Event memory swissDAOEvent = Event({
                                        title: _newTitle,
                                        id: _EventId,
                                        timestampOfEvent: _timestampOFEvent,
                                        owner: swissDAOEventCopy.owner,
                                        attendees: swissDAOEventCopy.attendees
                                    });

        idToEvents[_EventId] = swissDAOEvent;
    }

    function updateAttendeesOfEvent(uint256 _eventID, address _attendee) public {

    }

    function updateMembercardFields() public {
        
    }

    function createMember() public {
        
    }
}
