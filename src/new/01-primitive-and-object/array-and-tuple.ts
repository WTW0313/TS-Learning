const arr1: string[] = [];
const arr2: Array<string> = [];

// Array
const arr3: string[] = ["1", "2", "3"];
// no error
console.log(arr3[100]);

// Tuple 元组
const arr4: [string, string, string] = ["1", "2", "3"];
// error
console.log(arr4[100]);
const arr5: [string, number, boolean] = ["1", 12, false];
const arr6: [string, number?, boolean?] = ["1"]; // or ["1",,];
// Tuple Length
type tupleLen = typeof arr6.length;

// labeled Tuple
const arr7: [name: string, age: number, male?: boolean] = ["twwu", 26, true];
// no error
const [ele1, ele2, ...rest] = arr1;
// error
const [name_1, age_1, male1, other] = arr5;
