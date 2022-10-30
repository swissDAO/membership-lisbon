import * as DISPATCHER_ABI from '../../artifacts/contracts/Dispatcher.sol/Dispatcher.json'
import * as MEMBERCARD_ABI from '../../artifacts/contracts/MemberCard.sol/MemberCard.json'
import createSecrets from '../utils/createSecrets';

export const MULTI_SIGNATURE: string = "0x5c83D89411cf4fbc8415f99BDEBdCAF2394A4F63";
export const OWNER: string = "0xd887A7382c264bE90C5618133EAb5bDf3bE7aA5D";
//0xd887A7382c264bE90C5618133EAb5bDf3bE7aA5D => Yves
//0x94B2ceA71F9bA7A6e55c40bE320033D1151145B6 => Oli

export const DISPATCHER = {
  address: '0x428f1903EfA05a345649c24c75Fe6E636005C694',
  abi: DISPATCHER_ABI.abi,
}

export const MEMBERCARD = {
  address: '0x4772b8ce690cEC47c22f6B2FE1cFD6F3E6Db29ad',
  abi: MEMBERCARD_ABI.abi,
}


export const SECRETS = [
  createSecrets(),
  createSecrets(),
];