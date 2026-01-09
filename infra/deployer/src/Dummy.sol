// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Dummy {
    uint256 public number;

    function setNumber(uint256 _num) external {
        number = _num;
    }
}
