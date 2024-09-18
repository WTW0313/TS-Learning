void 0;

void (function iife() {
	console.log("Invoked!");
})();

function func1() {}
function func2() {
	return;
}
function func3(): undefined {
	return undefined;
}

const voidVar1: void = undefined;
const voidVar2: void = null;

export {};
