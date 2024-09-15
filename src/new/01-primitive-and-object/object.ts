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
// error
obj3.name = "wtw";

// Object
const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;
