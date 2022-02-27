const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the new counter it's changed", async function () {
    const counterFactory = await ethers.getContractFactory("Counter");
    const counter = await counterFactory.deploy();
    await counter.deployed();

    const setCounterTx = await counter.set(10);
    await setCounterTx.wait();
    expect(await counter.get()).to.equal(10);
    
    const countTx = await counter.count();
    await countTx.wait();
    expect(await counter.get()).to.equal(11);
  });
});
