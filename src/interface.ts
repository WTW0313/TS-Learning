interface LabelledValue {
  size: number;
  label: string;
}

const printLabel = (labelledObj: LabelledValue) => {
  console.log(labelledObj.size, labelledObj.label);
}

const myObj = {
  size: 10,
  label: 'Size 10'
}
printLabel(myObj);

// optional properties
interface SquareConfig {
  width?: number;
  color?: string;
  [propName: string]: any;
}

interface Square {
  color: string;
  area: number;
}

const createSquare = (config: SquareConfig): Square => {
  const newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width ** 2;
  }
  return newSquare;
}

const squareOptions = {
  colour: 'white',
  width: 20
}

const mySquare1 = createSquare({ color: 'black', width: 12 });
const mySquare2 = createSquare(squareOptions);


console.log(mySquare1, mySquare2);

// readonly proerties
interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = {
  x: 10,
  y: 20
}

const a: number[] = [0, 2, 4, 6, 8];
const ro: ReadonlyArray<number> = a;

// Function
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch1: SearchFunc = (source: string, substring: string) => {
  const res = source.search(substring);
  return res > -1;
}

const mySearch2: SearchFunc = (src: string, substr: string) => {
  const res = src.search(substr);
  return res > -1;
}

// index
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ['Bob', 'Fred'];

const myStr: string = myArray[0];

console.log(myStr);

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

const arr: ReadonlyStringArray = ['asd', 'qwe'];

// Class
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
  tick?(): void;
}

class Clock implements ClockInterface {
  currentTime = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

const createClock = (ctr: ClockConstructor, hour: number, minute: number): ClockInterface => {
  return new ctr(hour, minute);
}

class DigitalClock implements ClockInterface {
  currentTime = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  tick() {
    console.log('Beep Beep');
  }
}

const digital = createClock(DigitalClock, 24, 60);

// interface inheritance
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Circle extends Shape, PenStroke {
  radius: number;
}

const circle = <Circle>{};
circle.color = 'blue';
circle.radius = 10;
circle.penWidth = 5.0;

console.log(circle);

// mixed type
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

const getCounter = (): Counter => {
  const counter = <Counter>(start: number) => {
    return 'Start at ' + start;
  };
  counter.interval = 123;
  counter.reset = () => {}
  return counter;
}

const c = getCounter();
c(10);
c.interval = 5.0;
c.reset();

console.log(c(10), c.interval, c.reset());
