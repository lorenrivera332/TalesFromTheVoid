
#### index.js

```javascript
#!/usr/bin/env node

const myths = [
  "The whispers of the Deep One echo beneath the black waves.",
  "In the void between stars, an ancient eye watches but never blinks.",
  "The Forgotten God stirs beneath the ruins of an abandoned temple.",
  "A tome of forbidden knowledge reveals secrets that unravel the mind.",
  "The stars will align again, and with them, so shall the Sleeper awaken."
];

function getRandomMyth() {
  return myths[Math.floor(Math.random() * myths.length)];
}

console.log("Welcome to Tales from the Void!");
console.log("Here is a random cosmic horror myth:");
console.log(getRandomMyth());
