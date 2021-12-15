const someValue: any = 'this is a string';

const strLength1: number = (<string>someValue).length;

const strLength2: number = (someValue as string).length;

console.log(someValue);
console.log(strLength1);
console.log(strLength2);
