// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "./interfaces/IDispatcher.sol";

// Import this file to use console.log
import "hardhat/console.sol";


contract Dispatcher is IDispatcher {

    struct Member {
        address member;
        uint256 tokenId;
    }

    struct Event {
        address owner;
        uint256 id;
        Member[] attendees;
    }


    constructor() {

    }

    function createEvent() public {
        
    }

    function updateEvent() public {
        
    }

    function updateMembercardFields() public {
        
    }

    function createMember() public {
        
    }
}
