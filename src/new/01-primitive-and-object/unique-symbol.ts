const uniqueSymbolFoo: unique symbol = Symbol("Foo");

// ! error
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo;

const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo;
