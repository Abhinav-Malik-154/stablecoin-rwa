// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/Dummy.sol";

contract DeployDummy is Script {
    function run() external {
        vm.startBroadcast();
        new Dummy();
        vm.stopBroadcast();
    }
}
