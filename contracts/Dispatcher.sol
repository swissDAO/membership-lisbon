// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "./interfaces/IDispatcher.sol";
import "./MemberCard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Import this file to use console.log
import "hardhat/console.sol";

contract Dispatcher is IDispatcher, Ownable {

    MemberCard memberCard;

    struct Member {
        address member;
        uint256 tokenId;
    }

    struct Event {
        string title;
        uint256 id;
        uint256 timestampOfEvent;
        address owner;
        uint16 maxAttendees;
        bytes32[] hashes;
    }

    mapping(uint256 => mapping(address => bool))
        public eventIdToMemberToIfPresent;

    uint256 eventCount;
    uint256 memberCount;

    mapping(uint256 => Event) public idToEvents;
    mapping(address => Member) public addressToMember;
    mapping(address => bool) public addressIsMember;
    mapping(uint256 => Member) public eventToAttendees;

    event EventCreated(address indexed _owner, uint256 _id, string _title, uint256 _timestampOfEvent);

    constructor() {}

    function createMemberCard() public onlyOwner {
        memberCard = new MemberCard(address(this));
    }

    function createEvent(
        string memory _title,
        uint256 _timestampOfEvent,
        uint16 _maxAttendees,
        bytes32[] memory _hashes
    ) public {
        eventCount++;

        Member[] memory emptyAttendees;
        // make creator and owner to attendee
        // mapping(uint256 => bool) memory checkIfMemberPartOfEvent = {};

        Event memory swissDAOEvent = Event({
            title: _title,
            id: eventCount,
            timestampOfEvent: _timestampOfEvent,
            owner: msg.sender,
            maxAttendees: _maxAttendees,
            //attendees: emptyAttendees,
            hashes: _hashes
        });

        //eventToAttendees[swissDAOEvent.id] = emptyAttendees;

        // checkIfMemberPartOfEvent: checkIfMemberPartOfEvent[msg.sender] = true

        idToEvents[eventCount] = swissDAOEvent;

        emit EventCreated(msg.sender, swissDAOEvent.id, swissDAOEvent.title, swissDAOEvent.timestampOfEvent);
    }

    function updateEvent(
        uint256 _EventId,
        string memory _newTitle,
        uint256 _timestampOFEvent
    ) public {
        // require owner calls this function

        Event memory swissDAOEventCopy = idToEvents[_EventId];

        require(
            msg.sender == swissDAOEventCopy.owner,
            "You are not the owner of this event"
        );

        Event memory swissDAOEvent = Event({
            title: _newTitle,
            id: _EventId,
            timestampOfEvent: _timestampOFEvent,
            owner: swissDAOEventCopy.owner,
            maxAttendees: swissDAOEventCopy.maxAttendees,
            //attendees: swissDAOEventCopy.attendees,
            hashes: swissDAOEventCopy.hashes
        });

        //eventToAttendees[swissDAOEventCopy.id] = swissDAOEventCopy.

        idToEvents[_EventId] = swissDAOEvent;
    }

    function iWasHere(
        uint256 _eventID,
        address _attendee,
        bytes32 _secret
    ) external {
        // require certain token for this to work, token receiving via qr code scanning
        bool validSecretDetected;

        Event storage swissDAOEvent = idToEvents[_eventID];

        for (uint256 i = 0; i < swissDAOEvent.maxAttendees; i++) {
            bytes32 _hash = swissDAOEvent.hashes[i];
            if (_hash == keccak256(abi.encodePacked(_secret))) {
                // remove hash from list
                require(i < swissDAOEvent.hashes.length);
                swissDAOEvent.hashes[i] = swissDAOEvent.hashes[
                    swissDAOEvent.hashes.length - 1
                ];
                swissDAOEvent.hashes.pop();
                // swissDAOEvent.hashes
                validSecretDetected = true;
                break;
            }
        }

        //require(validSecretDetected, "You don't have a valid secret.");

        // actual mint / upgrade
        bool _bool = addressIsMember[_attendee];
        if (_bool) {
            // already member => just upgrade
        } else {
            // no member yet => mint membership NFT with initial xp points
            memberCount++;
            uint256 id = memberCard.mintMemberCard();
            addressIsMember[msg.sender] = true;
            addressToMember[msg.sender] = Member({member: msg.sender, tokenId: id});
        }
    }

    function updateMembercardFields() public {}

    function createMember() public {
        // require certain token for this to work, token receiving via qr code scanning
    }
}
