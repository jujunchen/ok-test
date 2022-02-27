// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Counter {
    uint public counter;

    constructor() {
        console.log("Deploying a contract with Counter");
        counter = 0;
    }

    function get() public view returns(uint) {
        return counter;
    }

    function count() public {
        counter = counter + 1;
        console.log("counter + 1,counter=%s", counter);
    }

    function set(uint x) public {
        counter = counter + x;
        console.log("set counter,x=%s,counter=%s", x, counter);
    }

}