// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

// Interfaces
import "./interfaces/IMemberCard.sol";

contract MemberCard is
    IMemberCard,
    ERC721URIStorage,
    ERC721Enumerable,
    ERC721Burnable
{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MemberCard", "SWSS") {}

    function mintMemberCard() public {
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, getTokenURI());

        _tokenIds.increment();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC721, ERC721Enumerable) {
        ERC721._beforeTokenTransfer(from, to, amount);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        ERC721._burn(tokenId);
    }

    function tokenUri() external override(ERC721Enumerable) {}

    function updateSkills() {
        ERC721 _memberCard = ERC721();
    }

    function earnExperience() {
        ERC721 _memberCard = ERC721();
    }

    function getTokenURI() private view override returns (string memory) {
        return
            "https://gateway.pinata.cloud/ipfs/QmRj91zjBaMjUHtxJnGh32UvM6Wtd4fXNXt8czABLuuCsE";
    }
}
