type Combinable = number | string;
type ConserisionDescriptor = 'as-number' | 'as-text';

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConserisionDescriptor
) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combineAge = combine(20, 30, 'as-number');
console.log(combineAge);

const combineStringAge = combine('20', '30', 'as-number');
console.log(combineStringAge);

const combineName = combine('Danny', 'John', 'as-text');
console.log(combineName);
