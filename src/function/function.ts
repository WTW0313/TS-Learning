// Named function
function concat(x: string, y: string): string {
  return x + y;
}

// Anonymous function
let myConcat: (input1: string, input2: string) => string = function (
  x: string,
  y: string
): string {
  return x + y;
};

// rest parameters
const buildName = (firstName: string, ...restNames: string[]) => {
  return firstName + " " + restNames.join(" ");
};

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

// parameter `this`
interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: new Array(52),
  createCardPicker(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickddSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickddSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// `this` in callback functions
interface UIElement {
  addClickListener(onClick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string = "";
  onClickGood = (e: Event) => {
    this.info = "s";
  };
}

// reload
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
