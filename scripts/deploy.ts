import { ethers } from "hardhat";

async function main() {
  const Dispatcher = await ethers.getContractFactory("Dispatcher");
  const dispatcher = await Dispatcher.deploy();

  await dispatcher.deployed();

  console.log("Deployed Contract:", dispatcher.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
