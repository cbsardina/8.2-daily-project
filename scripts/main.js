/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let hand1 = ["2", "2", "8"];
let hand2 = ["2", "2", "K"];
let hand3 = ["2", "Q"];
let hand4 = ["7", "J"];
let hand5 = ["7", "A"];
let hand6 = ["8", "J", "A"];
let hand7 = ["8", "A", "J"];
let hand8 = ["8", "7", "A", "A"];
let hand9 = ["K", "A"];

function handValue (hand) {
  let parsedHand = [];
  let aceArr = [];
  for (let i=0; i < hand.length; i++) {
    let card = hand[i];
    if (card === "K"
        || card === "Q"
        || card === "J") {
          card = 10;
          parsedHand.push(card);
        }
        else if (card === "A") {
          aceArr.push(card);
        }
        else {
          parsedHand.push(parseInt(card, 10));
        }
  }
  let finalHand = 0;
  for (let j=0; j < parsedHand.length; j++) {
    let smalls = parsedHand[j];
    finalHand = finalHand + smalls;
  }
  if (aceArr.length === 0) {
    return finalHand;
  }
    else {
      for (let k=0; k < aceArr.length; k++) {
        if (finalHand <= 10) {
          let aces = aceArr[k];
          aces = 11;
          finalHand = finalHand + aces;
        }
        else if (finalHand >10) {
          aces = 1;
          finalHand = finalHand + aces;
        }
    }
  }
  return finalHand;
}
console.log(handValue(hand1));
console.log(handValue(hand2));
console.log(handValue(hand3));
console.log(handValue(hand4));
console.log(handValue(hand5));
console.log(handValue(hand6));
console.log(handValue(hand7));
console.log(handValue(hand8));
console.log(handValue(hand9));


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
