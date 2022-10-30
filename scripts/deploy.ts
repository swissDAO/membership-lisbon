import { ethers } from "hardhat";

async function main() {
  const Dispatcher = await ethers.getContractFactory("Dispatcher");
  const dispatcher = await Dispatcher.deploy();

  await dispatcher.deployed();

  const MemberCard = await ethers.getContractFactory("MemberCard");
  const memberCard = await MemberCard.deploy(dispatcher.address);
  await memberCard.deployed();

  console.log("Deployed Dispatcher Contract:", dispatcher.address);
  console.log("Deployed MemberCard Contract:", memberCard.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
