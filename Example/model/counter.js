import Atom from 'kefir.atom';

// our simplest store ever - counter
export const counter = Atom(0).log("counter");

export function increase(){
  counter.modify(x=>x+1);
}

export function decrease(){
  counter.modify(x=>x-1);
}

// example of 'computed' value = number of total operations
export const total = counter.scan((prev, next) => prev + 1, -1);
