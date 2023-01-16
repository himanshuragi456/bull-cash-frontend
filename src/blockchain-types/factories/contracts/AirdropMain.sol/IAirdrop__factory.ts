/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAirdrop,
  IAirdropInterface,
} from "../../../contracts/AirdropMain.sol/IAirdrop";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payaddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "emergencyWithdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint8[]",
        name: "",
        type: "uint8[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[3]",
        name: "_addrs",
        type: "address[3]",
      },
      {
        internalType: "uint256[1]",
        name: "_saleInfo",
        type: "uint256[1]",
      },
      {
        internalType: "string",
        name: "_poolDetails",
        type: "string",
      },
      {
        internalType: "address[3]",
        name: "_linkAddress",
        type: "address[3]",
      },
      {
        internalType: "uint8",
        name: "_version",
        type: "uint8",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "_vestingInit",
        type: "uint256[3]",
      },
    ],
    name: "initializeVesting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "governance_",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAirdrop__factory {
  static readonly abi = _abi;
  static createInterface(): IAirdropInterface {
    return new utils.Interface(_abi) as IAirdropInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAirdrop {
    return new Contract(address, _abi, signerOrProvider) as IAirdrop;
  }
}