const { ethers } = require("hardhat");

const address = "0xD6a6F2e44a3FA88D6D27a58C3f6c4E2654A9d1B7";

async function main() {
    let [owner] = await ethers.getSigners();

    let counter = await ethers.getContractAt("Counter", address, owner);

    const countTx = await counter.count();
    await countTx.wait();
    let getInfo = await counter.get();
    console.log("counter=%s", getInfo);

    // await counter.set(100);
    // console.log("counter=%s", counter.get());

    // await counter.count();
    // console.log("counter=%s", counter.get());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });