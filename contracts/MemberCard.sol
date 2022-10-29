// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

// Interfaces
import "./interfaces/IMemberCard.sol";

contract MemberCard is
    IMemberCard,
    AccessControl,
    ERC721URIStorage,
    ERC721Enumerable,
    ERC721Burnable
{
    using Counters for Counters.Counter;

    enum TIERS {
        BRONZE,
        SILVER,
        GOLD,
        PLATINUM
    }

    mapping(address => mapping(uint256 => TIERS)) memberToTokenIdToTIER;

    uint256 experiencePointsOverall;
    uint256 numberOfAttendedEvents;

    Counters.Counter private _tokenIds;

    address public DISPATCHER_ADDRESS;

    constructor(address _dispatcher) ERC721("MemberCard", "SWSS") {
        _grantRole(DEFAULT_ADMIN_ROLE, _dispatcher);
    }

    function mintMemberCard() public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "NOT_DISPATCHER");

        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, tokenURI(newItemId));

        memberToTokenIdToTIER[msg.sender][newItemId] = TIERS.BRONZE;

        _tokenIds.increment();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC721, ERC721Enumerable) {}

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        ERC721._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        // super.tokenURI(tokenId);
        return
            "https://gateway.pinata.cloud/ipfs/QmRj91zjBaMjUHtxJnGh32UvM6Wtd4fXNXt8czABLuuCsE";
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // function updateSkills() public {
    //     ERC721 _memberCard = ERC721();
    // }

    // function earnExperience() public {
    //     ERC721 _memberCard = ERC721();
    // }
}
