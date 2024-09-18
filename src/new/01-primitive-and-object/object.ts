// optional
interface IDescription {
	name: string;
	age: number;
	male?: boolean;
	func?: Function;
}

const obj1: IDescription = {
	name: "twwu",
	age: 26,
	male: true,
};

obj1.func = () => {};
obj1.male = false;

// readonly
interface IDescription_1 {
	readonly name: string;
	age: number;
}

const obj3: IDescription_1 = {
	name: "twwu",
	age: 26,
};
// ! error
// obj3.name = "wtw";

// Object (Boolean, String, Number, Symbol)
const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;

const tmp4: Object = "twwu";
const tmp5: Object = 26;
const tmp6: Object = { name: "twwu" };
const tmp7: Object = () => {};
const tmp8: Object = [];

const tmp9: String = undefined;
const tmp10: String = null;
const tmp11: String = void 0;
const tmp12: String = "twwu";

// ! error
// const tmp13: String = 26;
// const tmp14: String = { name: "twwu" };
// const tmp15: String = () => {};
// const tmp16: String = [];

// object
const tmp17: object = undefined;
const tmp18: object = null;
const tmp19: object = void 0;

// ! error
// const tmp20: object = "twwu";
// const tmp21: object = 26;

const tmp22: object = { name: "twwu" };
const tmp23: object = () => {};
const tmp24: object = [];

// {}
const tmp25: {} = undefined;
const tmp26: {} = null;
const tmp27: {} = void 0;

const tmp28: {} = "twwu";
const tmp29: {} = 26;
const tmp30: {} = { name: "twuu" };
const tmp31: {} = [];

// ! error
// tmp30.age = 26

export {};
