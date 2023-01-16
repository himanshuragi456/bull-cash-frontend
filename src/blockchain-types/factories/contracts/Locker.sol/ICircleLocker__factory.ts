/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICircleLocker,
  ICircleLockerInterface,
} from "../../../contracts/Locker.sol/ICircleLocker";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lockId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newUnlockDate",
        type: "uint256",
      },
    ],
    name: "editLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isLpToken",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "lock",
    outputs: [
      {
        internalType: "uint256",
        name: "lockId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isLpToken",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "tgeDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tgeBps",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cycle",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cycleBps",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "multipleVestingLock",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lockId",
        type: "uint256",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isLpToken",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tgeDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tgeBps",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cycle",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cycleBps",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "vestingLock",
    outputs: [
      {
        internalType: "uint256",
        name: "lockId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICircleLocker__factory {
  static readonly abi = _abi;
  static createInterface(): ICircleLockerInterface {
    return new utils.Interface(_abi) as ICircleLockerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICircleLocker {
    return new Contract(address, _abi, signerOrProvider) as ICircleLocker;
  }
}