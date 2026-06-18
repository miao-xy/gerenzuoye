import { network } from "hardhat";

async function main() {
  const { viem } = await network.getOrCreate("localhost");
  const [deployer] = await viem.getWalletClients();
  console.log("Deploying contracts with the account:", deployer.account.address);

  const messageBoard = await viem.deployContract("MessageBoard");
  console.log("MessageBoard deployed to:", messageBoard.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
