const name: string = "twwu";
const age: number = 26;
const isMale: boolean = true;
const udef: undefined = undefined;
const nul: null = null;
const obj: object = { name, age, isMale };
const bigintVar: bigint = 9007199254740991n;
const bigintVar2: bigint = BigInt(9007199254740991);
const symbolVar: symbol = Symbol("unique");

const tmp1: null = null;
const tmp2: undefined = undefined;
// 以下仅在strictNullCheck为false时成立
const temp3: string = null;
const temp4: string = undefined;

export {};
