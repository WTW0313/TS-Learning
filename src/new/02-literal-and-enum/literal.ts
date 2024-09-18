interface Res {
	code: 100 | 200 | 500;
	status: "success" | "failure";
	data: any;
}

const str: "twwu" = "twwu";
const num: 26 = 26;
const bool: true = true;

// ! error
// const str1: "twwu" = "twwu0313";
const str2: string = "twwu";
const str3: string = "twwu0313";

interface Tmp {
	bool: "true" | "false";
	num: 1 | 2 | 3;
	str: "t" | "w" | "wu";
}

interface Tmp {
	mixed: true | string | 26 | {} | (() => {}) | (1 | 2);
}

interface Tmp {
	user: { vip: true; expires: string } | { vip: false; promotion: string };
}

declare const tmp: Tmp;

if (tmp.user.vip) {
	console.log(tmp.user.expires);
}

type Code = 100 | 200 | 500;

type Status = "success" | "failure";

interface _Tmp {
	obj: {
		name: "twwu";
		age: 26;
	};
}

const _tmp: _Tmp = {
	obj: {
		name: "twwu",
		age: 26,
	},
};

export {};
